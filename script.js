// =============================================================
// CONFIGURATION
// settings to update regularly
// =============================================================

// Flight — update new upcoming flight
const FLIGHT = {
  departure: 'Munich',
  arrival: 'Madrid',
  date: '2026-08-03', // Format: YYYY-MM-DD
  time: '09:00'       // Format: HH:MM (24 hour clock)
};


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
    title: 'La vita agra',
    author: 'Luciano Bianciardi',
    description: 'Intellectual seeks revenge in Milan, but becomes absorbed by alienating capitalism.'
  },
  {
    title: 'Il deserto dei tartari',
    author: 'Dino Buzzati',
    description: 'A young soldier is assigned to a remote fortress where everybody is waiting for a misterious and terrible enemy.'
  },
  {
    title: 'The Left Hand of Darkness',
    author: 'Ursula K. Le Guin',
    description: "Envoy navigates gender-fluid society, politics, and isolation on icy planet."
  },
  {
    title: 'All the Light We Cannot See',
    author: 'Anthony Doerr',
    description: "An historical novel about a blind French girl and a German boy whose paths collide during World War II."
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

// --- ON THIS DAY WIDGET ---

const WIKI_URL = /^https:\/\/en\.wikipedia\.org\/wiki\/\S+$/;

let otdEvents = [];
let otdIndex = 0;
let otdDateKey = null;

function showOnThisDay(index) {
  const event = otdEvents[index];
  if (!event) return;

  setText('otd-text', `${event.year}: ${event.text}`);

  const link = document.getElementById('otd-link');
  if (!link) return;

  if (event.url && WIKI_URL.test(event.url)) {
    link.href = event.url;
    link.textContent = event.title
      ? `Read about ${event.title} on Wikipedia →`
      : 'Read on Wikipedia →';
    link.hidden = false;
  } else {
    link.hidden = true;
  }
}

function renderOnThisDay(otd) {
  if (!document.getElementById('otd-text')) return;

  if (!otd || !Array.isArray(otd.events) || otd.events.length === 0) {
    setText('otd-date', '');
    setText('otd-text', 'Currently unavailable');
    const link = document.getElementById('otd-link');
    if (link) link.hidden = true;
    return;
  }

  otdEvents = otd.events;

  // Pick a new random event only when the day changes (or on the first load),
  // so the page refresh every 5 minutes doesn't replace what the visitor is reading
  const key = `${otd.month}-${otd.day}`;
  if (key !== otdDateKey) {
    otdDateKey = key;
    otdIndex = Math.floor(Math.random() * otdEvents.length);
    // The year 2000 is a leap year, so 29 February is handled correctly
    const label = new Date(2000, otd.month - 1, otd.day)
      .toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
    setText('otd-date', `${label} in history`);
  }
  if (otdIndex >= otdEvents.length) otdIndex = 0;

  showOnThisDay(otdIndex);
}

function initOnThisDayButton() {
  const button = document.getElementById('otd-button');
  if (!button) return;

  button.addEventListener('click', () => {
    if (otdEvents.length < 2) return;

    // Pick a random event that isn't the one currently shown
    let next;
    do {
      next = Math.floor(Math.random() * otdEvents.length);
    } while (next === otdIndex);

    otdIndex = next;
    showOnThisDay(otdIndex);
  });
}


// WIDGET FUNCTIONS
// Defined here and then called inside DOMContentLoaded

const DATA_URL = 'data/widgets.json';
const MAX_DATA_AGE_MS = 10 * 60 * 1000; // older than this: don't claim "now playing"
const ALBUM_ART_PATH = /^data\/album-art\.(jpg|png|webp|gif)$/;

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

async function loadWidgetData() {
  // Only run on pages that contain at least one of these widgets
  const needsData = ['track-name', 'weather-condition', 'lichess-rating', 'otd-text']
    .some(id => document.getElementById(id));
  if (!needsData) return;

  let data;
  try {
    const response = await fetch(DATA_URL, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    data = await response.json();
  } catch (err) {
    console.error('widgets.json failed:', err);
    data = { updated: null, lastfm: null, weather: null, lichess: null, onThisDay: null };
  }

  

  renderLastFm(data);
  renderWeather(data.weather);
  renderLichess(data.lichess);
  renderOnThisDay(data.onThisDay);
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

  //Various widgets
  loadWidgetData();
  setInterval(loadWidgetData, 5 * 60 * 1000);
  initOnThisDayButton();

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
