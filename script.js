// =============================================================
// CONFIGURATION
// settings to update regularly
// =============================================================

// Last.fm — API key and username for the music widget
const LASTFM_API_KEY = '300f795e2e59a8a0fbdf122017101bf0';
const LASTFM_USERNAME = 'Recede1878';

// Weather — OpenWeatherMap API key and city
const WEATHER_API_KEY = '2a3f1ed46715838bdbc865c7cefa5b80';
const CITY = 'Hamburg';

// Lichess
const LICHESS_USERNAME = 'MiulioGuratori';

// Flight — update new upcoming flight
const FLIGHT = {
  departure: 'Hamburg',
  arrival: 'Bologna',
  date: '2026-03-27', // Format: YYYY-MM-DD
  time: '16:10'       // Format: HH:MM (24 hour clock)
};

// Birthday
const BIRTHDATE = new Date('2004-01-01T16:00:00');

// Total number of countries in the world — used for the progress bar
const TOTAL_COUNTRIES = 195;


// PHOTOS
// Add or remove photo filenames
const PHOTOS = [
  'assets/pictures/photo(1).jpg',
  'assets/pictures/photo(2).jpg',
  'assets/pictures/photo(3).jpg',
  'assets/pictures/photo(4).jpg',
  'assets/pictures/photo(5).jpg',
  'assets/pictures/photo(6).jpg',
  'assets/pictures/photo(7).jpg',
  'assets/pictures/photo(8).jpg',
  'assets/pictures/photo(9).jpg',
  'assets/pictures/photo(10).jpg',
  'assets/pictures/photo(11).jpg',
  'assets/pictures/photo(12).jpg',
  'assets/pictures/photo(13).jpg',
  'assets/pictures/photo(14).jpg',
  'assets/pictures/photo(15).jpg',
  'assets/pictures/photo(16).jpg',
  'assets/pictures/photo(17).jpg',
  'assets/pictures/photo(18).jpg',
  'assets/pictures/photo(19).jpg',
  'assets/pictures/photo(20).jpg',
  'assets/pictures/photo(21).jpg',
  'assets/pictures/photo(22).jpg',
  'assets/pictures/photo(23).jpg',
  'assets/pictures/photo(24).jpg',
  'assets/pictures/photo(25).jpg',
  'assets/pictures/photo(26).jpg',
  'assets/pictures/photo(27).jpg',
  'assets/pictures/photo(28).jpg',
  'assets/pictures/photo(29).jpg',
  'assets/pictures/photo(30).jpg',
  'assets/pictures/photo(31).jpg',
  'assets/pictures/photo(32).jpg',
  'assets/pictures/photo(33).jpg',
  'assets/pictures/photo(34).jpg',
  'assets/pictures/photo(35).jpg',
  'assets/pictures/photo(36).jpg',
  'assets/pictures/photo(37).jpg',
  'assets/pictures/photo(38).jpg',
  'assets/pictures/photo(39).jpg',
  'assets/pictures/photo(40).jpg',
  'assets/pictures/photo(41).jpg',
  'assets/pictures/photo(42).jpg',
  'assets/pictures/photo(43).jpg',
  'assets/pictures/photo(44).jpg',
  'assets/pictures/photo(45).jpg',
  'assets/pictures/photo(46).jpg',
  'assets/pictures/photo(47).jpg',
  'assets/pictures/photo(48).jpg',
  'assets/pictures/photo(49).jpg',
  'assets/pictures/photo(50).jpg'
];

// Start on random photo
let currentPhoto = Math.floor(Math.random() * PHOTOS.length);



// FUN FACTS
const FACTS = [
"Hakeem Olajuwon is the only player in NBA history to be named Player of the Month while observing Ramadan (Feb. 1995)",
"Ankylosaurus could weigh up to 8 tonnes: as heavy as two African elephants",
"The planet 55 Cancri e, 40 light-years from Earth, may be rich in diamond",
"A million seconds is 11 days; a billion seconds is 31 years",
"It might be more likely that you are just a random brain briefly appearing in space with fake memories than a person living in a real universe (Boltzmann Brains)",
"There are no photos of the present",
"Saturn's rings span ~300,000 km from end to end but are only about 10 meters thick",
"When Guglielmo Marconi died in 1937, radio stations worldwide went silent for two minutes in tribute; this was one of the rare moments of global radio silence",
"Ireland's population today is still lower than it was before the Great Famine in the 1840s",
"Hippos can't swim because of the size and density of their bones; they instead walk along the riverbed or sea floor",
"Carrots weren't originally orange; orange carrots were later cultivated in the Netherlands in honor of the Dutch royal House of Orange",
"William Adams was an English sailor who became the first foreign samurai in 1600; he was granted a sword, land, and the name Miura Anjin by the shogun Tokugawa Ieyasu",
"Immanuel Kant walked at the same time every day in Königsberg—so precisely that locals were said to set their clocks by his daily afternoon walk",
"Persian king Xerxes' bridges across the Hellespont were destroyed by a storm, so he had the sea whipped 300 times in punishment",
"Before Columbus reached the Americas, silver was rarer—and often more valuable—than gold in much of the world",
"Flamingos are born with gray or white feathers; they turn pink because of their diet",
"Between 1912 and 1948, the Olympics awarded medals for music, painting, sculpture, and architecture",
"Charles Darwin added wheels to his armchair, creating a primitive version of the modern office chair",
"Sudan has more pyramids than any other country in the world",
"The guitar riff in Deep Purple's 'Smoke on the Water' was inspired by Beethoven's Fifth Symphony",
"The Curie temperature is the temperature at which a magnet loses its magnetic properties",
"Karaoke means 'empty orchestra' in Japanese",
"Neanderthals had larger brains than modern humans",
"-40°C is exactly the same as -40°F",
"Bob Marley's final words to his son Ziggy were: 'On your way up, take me up. On your way down, don't let me down'",
"The iconic green falling code in The Matrix was inspired by sushi recipes",
"Julius Caesar added two extra months to the year 46 BC to realign the Roman calendar with the solar year",
"Sharks are older than both trees and dinosaurs"

];

// Keeps track of which fact is currently displayed
let currentFact = 0;

// Stores the reference to the autoplay timer so we can reset it on manual clicks
let autoplayInterval;



// BOOKS
// Add or remove books here to update the books widget
const BOOKS = [
  {
    title: 'Succede sempre qualcosa di meraviglioso',
    author: 'Gianluca Gotto',
    description: 'A guy makes a trip to Vietnam to honor his grandpa. This will change his life.'
  },
  {
    title: 'Tales of the Unexpected',
    author: 'Roald Dahl',
    description: 'Yes, that Roald Dahl. No, these short stories are not for children.'
  },
  {
    title: 'Lonesome Dove',
    author: 'Larry McMurtry',
    description: 'The best Western novel of all time.'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    description: 'A philosophical novel about following your dreams and listening to your heart.'
  },
  {
    title: 'Il deserto dei tartari',
    author: 'Dino Buzzati',
    description: 'A young soldier is assigned to a remote fortress where everybody is waiting for a misterious and terrible enemy.'
  },
  {
    title: 'Wanting',
    author: 'Luke Burgis',
    description: "Every time you think you want something you are actually imitating someone else's desires."
  },
  {
    title: 'The Poisonwood Bible',
    author: 'Barbara Kingsolver',
    description: "In 1959, a missionary family moves from the U.S. to the Belgian Congo. Quite the cultural shock!"
  },
  {
    title: "If on a Winter's Night a Traveller",
    author: 'Italo Calvino',
    description: "The most unique novel structure/idea I have ever seen."
  },
  {
    title: "The Terror",
    author: 'Dan Simmons',
    description: "A fictionalized account of a 1845 expedition where two British ships became trapped in Arctic ice and vanished."
  },
];



// FAVOURITE WEBSITES
// Add or remove websites here to update the websites widget
const WEBSITES = [
  {
    name: 'WikiShootMe',
    description: 'See Wikipedia articles near you',
    url: 'https://wikishootme.toolforge.org'
  },
  {
    name: 'Radio Garden',
    description: 'Listen to radio stations from all over the world',
    url: 'https://radio.garden'
  },
  {
    name: 'diode',
    description: 'Simulate simple circuits in your browser',
    url: 'https://withdiode.com'
  },
  {
    name: 'TrueSize',
    description: 'Compare the true size of countries',
    url: 'https://truesize.net'
  },
  {
    name: 'Checkpoint Threatmap',
    description: 'See cyber attacks happening in the world right now',
    url: 'https://threatmap.checkpoint.com'
  },
  {
    name: 'Animagraffs',
    description: '3D animations about how stuff works',
    url: 'https://animagraffs.com'
  },
  {
    name: 'OpenGuessr',
    description: 'Guess where you are in Google Streetview',
    url: 'https://openguessr.com'
  },
  {
    name: 'RemovePaywalls',
    description: 'Remove paywalls from websites',
    url: 'https://removepaywalls.com'
  }
];


// WIDGET FUNCTIONS
// These functions contain the logic for each widget
// They are defined here and then called inside DOMContentLoaded



// --- LAST.FM WIDGET ---
// Fetches the most recently played or currently playing track from Last.fm
// Last.fm scrobbles (records) Spotify listening history automatically
function fetchLastFm() {
  // Safety check — only run if the widget exists on this page
  if (!document.getElementById('track-name')) return;

  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const track = data.recenttracks.track[0];

      // Last.fm sets nowplaying to true if a track is currently playing
      const isNowPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';

      // As a backup, also check if the track was scrobbled within the last 3 minutes
      // This helps because Last.fm can be slow to update the nowplaying status
      const timestamp = track.date ? track.date.uts * 1000 : null;
      const threeMinutesAgo = Date.now() - 3 * 60 * 1000;
      const isRecent = timestamp && timestamp > threeMinutesAgo;

      const isPlaying = isNowPlaying || isRecent;

      const trackName = track.name;
      const artistName = track.artist['#text'];
      const albumArt = track.image[2]['#text'];

      // Show a play symbol if currently playing, or a rewind symbol if last played
      document.getElementById('track-name').textContent =
        (isPlaying ? '▶ ' : '⏮ ') + trackName;
      document.getElementById('artist-name').textContent = artistName;
      document.getElementById('album-art').src = albumArt;
    });
}


// --- WEATHER WIDGET ---
// Fetches current weather data from OpenWeatherMap for the configured city
async function fetchWeather() {
  // Safety check — only run if the widget exists on this page
  if (!document.getElementById('weather-condition')) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${WEATHER_API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  const temp = Math.round(data.main.temp);
  const condition = data.weather[0].description;

  // OpenWeatherMap uses numeric IDs to categorize weather conditions
  // We use these to pick an appropriate emoji
  const weatherId = data.weather[0].id;
  let emoji = '🌡️';
  if (weatherId >= 200 && weatherId < 300) emoji = '⛈️';       // Thunderstorm
  else if (weatherId >= 300 && weatherId < 400) emoji = '🌦️';  // Drizzle
  else if (weatherId >= 500 && weatherId < 600) emoji = '🌧️';  // Rain
  else if (weatherId >= 600 && weatherId < 700) emoji = '❄️';   // Snow
  else if (weatherId >= 700 && weatherId < 800) emoji = '🌫️';  // Fog/Mist
  else if (weatherId === 800) emoji = '☀️';                     // Clear sky
  else if (weatherId > 800) emoji = '⛅';                       // Cloudy

  document.getElementById('weather-icon').textContent = emoji;
  document.getElementById('weather-temp').textContent = `${temp}°C`;

  // Capitalize the first letter of the condition description
  document.getElementById('weather-condition').textContent =
    condition.charAt(0).toUpperCase() + condition.slice(1);
}


// --- AGE WIDGET ---
// Calculates the exact age in years, months, days and hours
// based on the BIRTHDATE constant defined at the top
function updateAge() {
  // Safety check — only run if the widget exists on this page
  if (!document.getElementById('age-display')) return;

  const now = new Date();
  const diff = now - BIRTHDATE; // difference in milliseconds

  // Convert milliseconds into human readable units
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById('age-display').textContent =
    `${years} years, ${months} months, ${days} days, ${hours} hours`;
}


// --- FLIGHT WIDGET ---
// Shows the next upcoming flight and a countdown to departure
function updateFlightWidget() {
  // Safety check — only run if the widget exists on this page
  if (!document.getElementById('flight-status')) return;

  const now = new Date();
  const flightDateTime = new Date(`${FLIGHT.date}T${FLIGHT.time}`);

  // diff is negative if the flight has already departed
  const diff = flightDateTime - now;

  document.getElementById('flight-departure').textContent = FLIGHT.departure;
  document.getElementById('flight-arrival').textContent = FLIGHT.arrival;

  if (diff < 0) {
    // Flight has already departed
    document.getElementById('flight-status').textContent = '🛬 Flight has departed';
  } else {
    // Break down the remaining time into days, hours and minutes
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) {
      document.getElementById('flight-status').textContent =
        `🕒 Departing in ${days}d ${hours}h ${minutes}m`;
    } else if (hours > 0) {
      document.getElementById('flight-status').textContent =
        `🕒 Departing in ${hours}h ${minutes}m`;
    } else {
      document.getElementById('flight-status').textContent =
        `🕒 Departing in ${minutes} minutes!`;
    }
  }
}


// --- FACTS WIDGET ---
// Shows a random fact and fades between them automatically or on button click

function showFact(index) {
  // Safety check — only run if the widget exists on this page
  if (!document.getElementById('facts-text')) return;

  const factText = document.getElementById('facts-text');

  // Fade the text out first
  factText.style.opacity = '0';

  // Wait for the fade out to finish, then update the text and fade back in
  setTimeout(() => {
    factText.textContent = FACTS[index];
    factText.style.opacity = '1';
  }, 300);
}

function nextFact() {
  // Pick a random fact that isn't the same as the current one
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * FACTS.length);
  } while (randomIndex === currentFact);
  
  currentFact = randomIndex;
  showFact(currentFact);
}

function startAutoplay() {
  // Automatically advance to the next fact every 30 seconds
  autoplayInterval = setInterval(nextFact, 30000);
}

function resetAutoplay() {
  // When the user clicks the button manually, reset the 30 second timer
  // so the fact doesn't auto-skip immediately after they clicked
  clearInterval(autoplayInterval);
  startAutoplay();
}


// --- PHOTO CAROUSEL ---
// Shows one photo at a time with prev/next buttons and fullscreen support

function showPhoto(index) {
  // Safety check — only run if the widget exists on this page
  if (!document.getElementById('photo-image')) return;

  const img = document.getElementById('photo-image');

  // Fade out the current photo
  img.style.opacity = '0';

  setTimeout(() => {
    // Update the image source — the browser will now download this photo
    img.src = PHOTOS[index];

    // Fade back in once the new photo has finished loading
    img.onload = () => {
      img.style.opacity = '1';
    };
  }, 300);
}


// --- WORLD PROGRESS BAR ---
// Counts how many unique countries have the "visited" class in the SVG
// and calculates what percentage of the world that represents
function calculateWorldProgress() {
  // Safety check — only run if the widget exists on this page
  if (!document.getElementById('progress-bar')) return;

  const visitedPaths = document.querySelectorAll('svg path.visited');
  const visitedCountries = new Set();

  visitedPaths.forEach(path => {
    // Single-path countries (e.g. Germany) have a name attribute
    const name = path.getAttribute('name');

    if (name) {
      visitedCountries.add(name);
    } else {
      // Multi-path countries (e.g. Australia) use the class name minus "visited"
      const className = path.getAttribute('class')
        .replace('visited', '')
        .trim();
      if (className) {
        visitedCountries.add(className);
      }
    }
  });

  const count = visitedCountries.size;
  const percentage = ((count / TOTAL_COUNTRIES) * 100).toFixed(1);

  document.getElementById('progress-bar').style.width = `${percentage}%`;
  document.getElementById('progress-text').textContent =
    `${count} out of ${TOTAL_COUNTRIES} countries (${percentage}%)`;
}


// --- LICHESS WIDGET ---
// Fetches your Lichess rapid rating, number of games and last game result
// No API key needed — Lichess has a completely public API
async function fetchLichess() {
  // Safety check — only run if the widget exists on this page
  if (!document.getElementById('lichess-username')) return;

  // Fetch the user profile data
  const userResponse = await fetch(`https://lichess.org/api/user/${LICHESS_USERNAME}`);
  const userData = await userResponse.json();

  const rapid = userData.perfs.rapid;
  const rating = rapid.rating;
  const games = rapid.games;

  // Fetch the last rapid game — the API returns games in PGN format (chess notation)
  const gameResponse = await fetch(
    `https://lichess.org/api/games/user/${LICHESS_USERNAME}?max=1&perfType=rapid&clocks=false&evals=false`
  );
  const gameText = await gameResponse.text();

  // Parse the result from the PGN text
  // In chess PGN format, "1-0" means White won, "0-1" means Black won, "1/2-1/2" means draw
  let lastResult = 'Unknown';
  if (gameText.includes(`[White "${LICHESS_USERNAME}"]`)) {
    const resultMatch = gameText.match(/\[Result "(.+?)"\]/);
    if (resultMatch) {
      const result = resultMatch[1];
      if (result === '1-0') lastResult = '✅ Won (White)';
      else if (result === '0-1') lastResult = '❌ Lost (White)';
      else lastResult = '🟡 Draw (White)';
    }
  } else {
    const resultMatch = gameText.match(/\[Result "(.+?)"\]/);
    if (resultMatch) {
      const result = resultMatch[1];
      if (result === '0-1') lastResult = '✅ Won (Black)';
      else if (result === '1-0') lastResult = '❌ Lost (Black)';
      else lastResult = '🟡 Draw (Black)';
    }
  }

  document.getElementById('lichess-username').textContent = `👤 ${userData.username}`;
  document.getElementById('lichess-rating').textContent = `Rating: ${rating}`;
  document.getElementById('lichess-games').textContent = `Games played: ${games}`;
  document.getElementById('lichess-last-game').textContent = `Last game: ${lastResult}`;
}


// --- BOOKS WIDGET ---
// Dynamically creates a card for each book in the BOOKS array
function renderBooks() {
  // Safety check — only run if the widget exists on this page
  if (!document.getElementById('books-grid')) return;

  const grid = document.getElementById('books-grid');

  BOOKS.forEach(book => {
    // Create a new div element for each book card
    const card = document.createElement('div');
    card.classList.add('book-card');

    card.innerHTML = `
      <div class="book-info">
        <span class="book-title">${book.title}</span>
        <span class="book-author">${book.author}</span>
        <span class="book-description">${book.description}</span>
      </div>
    `;

    // Add the card to the grid
    grid.appendChild(card);
  });
}


// --- WEBSITES WIDGET ---
// Dynamically creates a clickable link for each website in the WEBSITES array
function renderWebsites() {
  // Safety check — only run if the widget exists on this page
  if (!document.getElementById('websites-list')) return;

  const list = document.getElementById('websites-list');

  WEBSITES.forEach(site => {
    // Create an anchor element so each website is a clickable link
    const item = document.createElement('a');
    item.href = site.url;
    item.target = '_blank'; // opens in a new tab
    item.classList.add('website-item');

    item.innerHTML = `
      <div class="website-info">
        <span class="website-name">${site.name}</span>
        <span class="website-description">${site.description}</span>
      </div>
      <span class="website-arrow">→</span>
    `;

    list.appendChild(item);
  });
}


// --- MAP TOOLTIP ---
// Shows the country name when hovering over the SVG map
function initMapTooltip() {
  // Safety check — only run if the tooltip and SVG exist on this page
  const tooltip = document.getElementById('tooltip');
  if (!tooltip) return;
  if (!document.querySelector('svg')) return;

  document.querySelectorAll('svg path').forEach(path => {
    path.addEventListener('mousemove', (e) => {
      // Single-path countries have a name attribute (e.g. name="Germany")
      let name = path.getAttribute('name');

      // Multi-path countries use the class name — remove "visited" to get the country name
      if (!name) {
        name = path.getAttribute('class')
          .replace('visited', '')
          .trim();
      }

      tooltip.textContent = name;
      tooltip.style.display = 'block';
      tooltip.style.left = e.pageX + 12 + 'px';
      tooltip.style.top = e.pageY + 12 + 'px';
    });

    path.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  });
}


// =============================================================
// DOM CONTENT LOADED
// This is the main entry point — everything runs from here
// We wait for the page to fully load before running any code
// because widgets can only be found once the HTML exists
// =============================================================
document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar: highlight the current active page ---
  // Gets the filename from the URL (e.g. "about.html") and adds
  // the "active" class to the matching nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // --- Last.fm widget ---
  // Fetch immediately and then refresh every 30 seconds
  if (document.getElementById('track-name')) {
    fetchLastFm();
    setInterval(fetchLastFm, 30000);
  }

  // --- Weather widget ---
  // Fetch immediately and then refresh every 10 minutes
  // Weather doesn't change as fast as music so 10 minutes is enough
  if (document.getElementById('weather-condition')) {
    fetchWeather();
    setInterval(fetchWeather, 10 * 60 * 1000);
  }

  // --- Age widget ---
  // Update immediately and then refresh every hour
  if (document.getElementById('age-display')) {
    updateAge();
    setInterval(updateAge, 1000 * 60 * 60);
  }

  // --- Flight widget ---
  // Update immediately and then refresh every minute
  if (document.getElementById('flight-status')) {
    updateFlightWidget();
    setInterval(updateFlightWidget, 60000);
  }

  // --- Facts widget ---
  // Show the first fact, start autoplay, and attach the button click listener
  if (document.getElementById('facts-text')) {
    showFact(currentFact);
    startAutoplay();
    document.getElementById('facts-button').addEventListener('click', () => {
      nextFact();
      resetAutoplay(); // reset the timer so it doesn't skip too soon after a manual click
    });
  }

  // --- World progress bar ---
  if (document.getElementById('progress-bar')) {
    calculateWorldProgress();
  }

  // --- Photo carousel ---
  // Show the first photo and attach click listeners to the buttons
  if (document.getElementById('photo-image')) {
    showPhoto(currentPhoto);

    document.getElementById('photo-next').addEventListener('click', () => {
      currentPhoto = (currentPhoto + 1) % PHOTOS.length;
      showPhoto(currentPhoto);
    });

    document.getElementById('photo-prev').addEventListener('click', () => {
      // Adding PHOTOS.length before subtracting prevents the index going negative
      currentPhoto = (currentPhoto - 1 + PHOTOS.length) % PHOTOS.length;
      showPhoto(currentPhoto);
    });

    // Fullscreen button — makes the entire widget go fullscreen (not just the image)
    // so that the navigation buttons are still visible in fullscreen mode
    document.getElementById('photo-fullscreen').addEventListener('click', () => {
      const widget = document.getElementById('photo-widget');
      if (!document.fullscreenElement) {
        widget.requestFullscreen();
        document.getElementById('photo-fullscreen').textContent = '✕ Exit';
      } else {
        document.exitFullscreen();
        document.getElementById('photo-fullscreen').textContent = '⛶ Fullscreen';
      }
    });
  }

  // --- Books widget ---
  if (document.getElementById('books-grid')) {
    renderBooks();
  }

  // --- Websites widget ---
  if (document.getElementById('websites-list')) {
    renderWebsites();
  }

  // --- Lichess widget ---
  if (document.getElementById('lichess-username')) {
    fetchLichess();
  }

  // --- Map tooltip ---
  initMapTooltip();

});



// FULLSCREEN CHANGE EVENT
// This runs whenever the user exits fullscreen (e.g. by pressing Escape)
// and resets the fullscreen button text back to its default
document.addEventListener('fullscreenchange', () => {
  const btn = document.getElementById('photo-fullscreen');
  if (btn && !document.fullscreenElement) {
    btn.textContent = '⛶ Fullscreen';
  }
});