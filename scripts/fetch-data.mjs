// Runs inside the GitHub Action (Node 20+).
// Calls Last.fm, OpenWeatherMap and Lichess with credentials from GitHub Secrets
// and writes the results to data/widgets.json (plus the album cover as an image),
// so visitors' browsers only ever talk to giulio.world.
//
// NOTE: workflow logs of a public repo are public. Never print URLs,
// environment variables or full API responses in this file.

import { mkdir, writeFile } from 'node:fs/promises';

const {
  LASTFM_API_KEY,
  LASTFM_USERNAME,
  WEATHER_API_KEY,
  WEATHER_CITY,
  LICHESS_USERNAME,
} = process.env;

const missing = Object.entries({
  LASTFM_API_KEY,
  LASTFM_USERNAME,
  WEATHER_API_KEY,
  WEATHER_CITY,
  LICHESS_USERNAME,
})
  .filter(([, value]) => !value)
  .map(([name]) => name);

if (missing.length > 0) {
  console.error(`Missing secrets: ${missing.join(', ')}`);
  process.exit(1);
}

const OUT_DIR = 'data';
const TIMEOUT_MS = 15_000;
const HEADERS = { 'User-Agent': 'giulio.world-widget-updater' };

// Album covers: only download from these hosts, only real raster images, max 1 MB
const ART_HOSTS = ['lastfm.freetls.fastly.net'];
const ART_TYPES = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
};
const MAX_ART_BYTES = 1_000_000;

// Error messages only contain a label and a status code, never the URL
// (the URL contains the API key).
async function request(url, label, extraHeaders = {}) {
  const res = await fetch(url, {
    headers: { ...HEADERS, ...extraHeaders },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`${label}: HTTP ${res.status}`);
  return res;
}

// --- Last.fm ---------------------------------------------------------------
async function saveAlbumArt(imageUrl) {
  try {
    if (!imageUrl) {
      console.log('Album art: Last.fm returned no image for this track');
      return null;
    }

    const url = new URL(imageUrl);
    if (url.protocol !== 'https:' || !ART_HOSTS.includes(url.hostname)) {
      // Only the hostname is logged (not the full URL)
      console.log(`Album art: host not allowed (${url.hostname})`);
      return null;
    }

    const res = await request(url, 'Album art');
    const type = (res.headers.get('content-type') || '').split(';')[0].trim();
    const ext = ART_TYPES[type];
    if (!ext) {
      console.log(`Album art: unsupported content type (${type || 'none'})`);
      return null;
    }

    const bytes = Buffer.from(await res.arrayBuffer());
    if (bytes.length === 0 || bytes.length > MAX_ART_BYTES) {
      console.log(`Album art: unexpected size (${bytes.length} bytes)`);
      return null;
    }

    await writeFile(`${OUT_DIR}/album-art.${ext}`, bytes);
    console.log(`Album art: saved (${ext}, ${bytes.length} bytes)`);
    return `data/album-art.${ext}`;
  } catch (err) {
    console.error(`Album art skipped: ${err.message}`);
    return null;
  }
}

async function getLastFm() {
  const url = new URL('https://ws.audioscrobbler.com/2.0/');
  url.search = new URLSearchParams({
    method: 'user.getrecenttracks',
    user: LASTFM_USERNAME,
    api_key: LASTFM_API_KEY,
    format: 'json',
    limit: '1',
  });

  const data = await (await request(url, 'Last.fm')).json();
  const track = data.recenttracks.track[0];
  if (!track) return null;

  return {
    track: String(track.name),
    artist: String(track.artist['#text']),
    nowPlaying: track['@attr']?.nowplaying === 'true',
    albumArt: await saveAlbumArt(track.image?.[2]?.['#text']),
  };
}

// --- Weather ---------------------------------------------------------------
async function getWeather() {
  const url = new URL('https://api.openweathermap.org/data/2.5/weather');
  url.search = new URLSearchParams({
    q: WEATHER_CITY,
    appid: WEATHER_API_KEY,
    units: 'metric',
  });

  const data = await (await request(url, 'OpenWeatherMap')).json();
  return {
    temp: Math.round(data.main.temp),
    condition: String(data.weather[0].description),
    id: Number(data.weather[0].id),
  };
}

// --- Lichess ---------------------------------------------------------------
async function getLichess() {
  const name = encodeURIComponent(LICHESS_USERNAME);

  const user = await (await request(`https://lichess.org/api/user/${name}`, 'Lichess user')).json();
  const rapid = user.perfs?.rapid;
  if (!rapid) throw new Error('Lichess: no rapid rating');

  const gameRes = await request(
    `https://lichess.org/api/games/user/${name}?max=1&perfType=rapid`,
    'Lichess games',
    { Accept: 'application/x-ndjson' }
  );
  const gameText = (await gameRes.text()).trim();

  let lastGame = null;
  if (gameText) {
    const game = JSON.parse(gameText.split('\n')[0]);
    const myId = LICHESS_USERNAME.toLowerCase();
    const color = game.players?.white?.user?.id === myId ? 'white' : 'black';
    let outcome = 'draw';
    if (game.winner) outcome = game.winner === color ? 'won' : 'lost';
    lastGame = { outcome, color };
  }

  return { rating: Number(rapid.rating), games: Number(rapid.games), lastGame };
}

// --- Main ------------------------------------------------------------------
await mkdir(OUT_DIR, { recursive: true });

const data = {
  updated: new Date().toISOString(),
  lastfm: null,
  weather: null,
  lichess: null,
};

const jobs = { lastfm: getLastFm, weather: getWeather, lichess: getLichess };

// One failing source must not break the others
for (const [key, job] of Object.entries(jobs)) {
  try {
    data[key] = await job();
  } catch (err) {
    console.error(`${key} failed: ${err.message}`);
  }
}

// If everything failed, stop here so the previous (working) deployment stays live
if (!data.lastfm && !data.weather && !data.lichess) {
  console.error('All sources failed; keeping the previous deployment.');
  process.exit(1);
}

await writeFile(`${OUT_DIR}/widgets.json`, JSON.stringify(data, null, 2));
console.log('data/widgets.json written');
