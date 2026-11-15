
const DATA_URL = 'data/widgets.json';
const MAX_DATA_AGE_MS = 10 * 60 * 1000; // older than this: don't claim "now playing"
const ALBUM_ART_PATH = /^data\/album-art\.(jpg|png|webp|gif)$/;

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

async function loadWidgetData() {
  // Only run on pages that contain at least one of these widgets
  const needsData = ['track-name', 'weather-condition', 'lichess-rating']
    .some(id => document.getElementById(id));
  if (!needsData) return;

  let data;
  try {
    const response = await fetch(DATA_URL, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    data = await response.json();
  } catch {
    data = { updated: null, lastfm: null, weather: null, lichess: null };
  }

  renderLastFm(data);
  renderWeather(data.weather);
  renderLichess(data.lichess);
}


function renderLastFm(data) {
  if (!document.getElementById('track-name')) return;

  const track = data.lastfm;
  if (!track) {
    setText('track-name', 'Currently unavailable');
    setText('artist-name', '');
    return;
  }

  // The data is up to ~10 minutes old, so only show "playing" if it is fresh
  const age = Date.now() - Date.parse(data.updated);
  const isPlaying = track.nowPlaying && age < MAX_DATA_AGE_MS;

  setText('track-name', (isPlaying ? '▶ ' : '⏮ ') + track.track);
  setText('artist-name', track.artist);

  const art = document.getElementById('album-art');
  if (art) {
    if (track.albumArt && ALBUM_ART_PATH.test(track.albumArt)) {
      // ?v= makes the browser reload the cover when the data changes
      art.src = `${track.albumArt}?v=${encodeURIComponent(data.updated)}`;
      art.hidden = false;
    } else {
      art.hidden = true;
    }
  }
}


function weatherEmoji(id) {
  // OpenWeatherMap uses numeric IDs to categorize weather conditions
  if (id >= 200 && id < 300) return '⛈️';  // Thunderstorm
  if (id >= 300 && id < 400) return '🌦️'; // Drizzle
  if (id >= 500 && id < 600) return '🌧️'; // Rain
  if (id >= 600 && id < 700) return '❄️';  // Snow
  if (id >= 700 && id < 800) return '🌫️'; // Fog/Mist
  if (id === 800) return '☀️';             // Clear sky
  if (id > 800) return '⛅';               // Cloudy
  return '🌡️';
}

function renderWeather(weather) {
  if (!document.getElementById('weather-condition')) return;

  if (!weather) {
    setText('weather-temp', '--°C');
    setText('weather-condition', 'Currently unavailable');
    return;
  }

  const condition = weather.condition;
  setText('weather-icon', weatherEmoji(weather.id));
  setText('weather-temp', `${weather.temp}°C`);
  setText('weather-condition', condition.charAt(0).toUpperCase() + condition.slice(1));
}


const LICHESS_OUTCOMES = { won: '✅ Won', lost: '❌ Lost', draw: '🟡 Draw' };

function renderLichess(lichess) {
  if (!document.getElementById('lichess-rating')) return;

  if (!lichess) {
    setText('lichess-rating', 'Currently unavailable');
    setText('lichess-games', '');
    setText('lichess-last-game', '');
    return;
  }

  setText('lichess-rating', `Rating: ${lichess.rating}`);
  setText('lichess-games', `Games played: ${lichess.games}`);

  const game = lichess.lastGame;
  const outcome = game ? LICHESS_OUTCOMES[game.outcome] : null;
  const color = game && (game.color === 'white' ? 'White' : 'Black');
  setText('lichess-last-game', outcome ? `Last game: ${outcome} (${color})` : 'Last game: Unknown');
}


// =============================================================
// ADD THESE TWO LINES inside the DOMContentLoaded handler
// (replacing the three old Last.fm / Weather / Lichess blocks):
//
//   loadWidgetData();
//   setInterval(loadWidgetData, 5 * 60 * 1000);
//
// =============================================================