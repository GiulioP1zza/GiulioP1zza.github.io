// =============================================================
// ASCII GLOBE
// A slowly rotating Earth drawn with text characters, shown in
// <pre id="ascii-art">. Everything runs locally in the browser:
// no external requests, no libraries.
//
// - Sizes itself to the space available and to your font's real
//   character shape, so the globe stays round on desktop and phones.
// - If JavaScript is off, the static art already inside the <pre>
//   stays visible. Visitors who prefer reduced motion get a still image.
// =============================================================
(() => {
  const el = document.getElementById('ascii-art');
  if (!el) return;

  // ----- Settings you can change -----
  const MAX_ROWS = 30;                    // size on wide screens (more rows = denser, bigger globe)
  const MIN_ROWS = 14;                    // never smaller than this, even on tiny screens
  const TILT_DEG = 20;                    // how far the north pole leans towards the viewer
  const SPEED_DEG_PER_SEC = 12;           // rotation speed (one full turn = 30 seconds)
  const FPS = 20;                         // frames per second
  const START_LON = 10;                   // longitude facing the viewer at the start (10 = Europe)
  const LAND = '-=+*xX#%&@';              // land characters, dark to bright (finer = more detail)
  const OCEAN = ' ';                    // ocean characters, dark to bright (kept light on purpose)
  const LIGHT = [-0.4, 0.5, 0.75];        // light direction (x right, y up, z towards viewer)

  // ----- Land mask: 180 x 90 cells of 2 degrees (row 0 = north pole), packed as bits -----
  // Generated from Natural Earth 1:110m land polygons (public domain).
  const MASK_W = 180;
  const MASK_H = 90;
  const MASK_B64 = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABf+Af/gAAAAAAAAAAAAAAAAAAAAAAA///////AABAAgAADgAAAAAAAAAAACNf+////wAA9AAAAAB8AAAAAAAAAABxCz4f///wAAYAAAEAAHwAAAAAAAAAAOivgAf//wAAAAADgAf/4AHAAAAAAAD+334AP//gAAAAAMBD///8DgAAADwADfy3/gP//gAAA4AMD///////wAgf////zdjwH//AAAP/gJ//////////0P//////h+H/gAAAf/7///////////c//////9l4D8AeAA+/f///////////CP/////xg4B4AAAH9/////////////Af/////gHgA4AAAP5///////////PwAHoP///gH0AAAAAH4//////////yIAADQB///8H+AAAAGDx/////////8A8AAAAA////v/gAAAOCr/////////wA4AAAAAP///v/wAAAbv///////////AwAAAAAP/////wAAAD////////////AAAAAAAD////6YAAAD///////////9AAAAAAAD////8AAAAB///////////5AAAAAAAD////+AAAAB/f4ff//////wAAAAAAAD////gAAAAP5vwPP//////jAAAAAAAD////AAAAAfi/3/n/////+CAAAAAAAD///+AAAAAfCDf/n////+MCAAAAAAAB///8AAAAAOeBP///////mOAAAAAAAA///8AAAAAH+AA///////E8AAAAAAAAf//wAAAAAP/gB///////hgAAAAAAAAP//wAAAAAf/7////////gAAAAAAAAAD/AwAAAAAf////f/////gAAAAAAAAAF/AQAAAAB///+/n/////AAAAAAAAAAC+AAAAAAD/////0/////AAAAAAAAAAAeAQAAAAD////f/D///8gAAAAAAAAAAfEEAAAAD////v/B/z/AAAAAAAAAAAAPMBwAAAD////v+A/B+gAAAAAAAAAAAD8AAAAAD////34A+B/AgAAAAAAAAAAAPAAAAAH////3wAcAfggAAAAAAAAAAAHAAAAAH////+AAcAfgQAAAAAAAAAAABDYAAAD////9wAMATAAAAAAAAAAAAAA3/AAAB/////gAKAQAIAAAAAAAAAAAAH/gAAA/////gACAICIAAAAAAAAAAAAH/8AAAfH///AAAAsHAAAAAAAAAAAAAH/+AAAAB//+AAAAUOAAAAAAAAAAAAAP/+AAAAD//8AAAAc+yAAAAAAAAAAAAP//gAAAD//4AAAAMeggAAAAAAAAAAAP//8AAAB//wAAAAGdg+AAAAAAAAAAAf///AAAA//wAAAACAQPkAAAAAAAAAAP///gAAA//wAAAABwAHwAAAAAAAAAAP///AAAA//wAAAAABACQIAAAAAAAAAH///AAAAf/wAAAAAAAAAAAAAAAAAAAD//+AAAA//4gAAAAABxAAAAAAAAAAAD//+AAAA//wgAAAAAPxgAAAAAAAAAAA//+AAAA//zgAAAAAf/gABAAAAAAAAAf/8AAAA//DgAAAAAf/gAAAAAAAAAAAf/8AAAAf/DAAAAAD//4CAAAAAAAAAAf/4AAAAf/DAAAAAH//4AAAAAAAAAAA//AAAAAf+CAAAAAH//8AAAAAAAAAAA//AAAAAf+AAAAAAH//+AAAAAAAAAAA/+AAAAAP8AAAAAAH//+AAAAAAAAAAA/+AAAAAH4AAAAAAD//+AAAAAAAAAAA/8AAAAAHwAAAAAAD4f8AAAAAAAAAAA/4AAAAAAAAAAAAACAH4AAAAAAAAAAB/wAAAAAAAAAAAAAAAD4AEAAAAAAAAB/AAAAAAAAAAAAAAAAAAAGAAAAAAAAB+AAAAAAAAAAAAAAAAAQAMAAAAAAAAB8AAAAAAAAAAAAAAAAAQAYAAAAAAAAB4AAAAAAAAAAAAAAAAAAAwAAAAAAAAD4AAAAAAAAAAAAAAAAAAAgAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAADwgAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAA/AB/////gAAAAAAAAAAAsAAAAAAADv/+H//////gAAAAAAAAAB+AAAAH/////8////////gAAAAAAGeI/AAAD///////////////gAAB//////8AAAH//////////////+AAB///////gAAP///////////////8AAM//////4ABw////////////////+AAAf///////Hj////////////////wAAAf//////////////////////////A//7///////////////////////////////////////////////////////////////////////////////////////';

  const TILT = TILT_DEG * Math.PI / 180;
  const sinT = Math.sin(TILT);
  const cosT = Math.cos(TILT);

  const lightLen = Math.hypot(...LIGHT);
  const L = LIGHT.map(v => v / lightLen);

  const mask = Uint8Array.from(atob(MASK_B64), ch => ch.charCodeAt(0));

  // Current grid size (set by layout())
  let rows = MAX_ROWS;
  let cols = MAX_ROWS * 2;

  function bit(col, row) {
    const c = ((col % MASK_W) + MASK_W) % MASK_W;           // longitude wraps around
    const r = Math.min(MASK_H - 1, Math.max(0, row));
    const i = r * MASK_W + c;
    return (mask[i >> 3] >> (7 - (i & 7))) & 1;
  }

  // How much of the spot is land (0 to 1), blended smoothly between neighbouring cells
  // so coastlines look smooth instead of blocky.
  function landFraction(lonDeg, latDeg) {
    const u = (lonDeg + 180) / 2 - 0.5;
    const v = (90 - latDeg) / 2 - 0.5;
    const c0 = Math.floor(u);
    const r0 = Math.floor(v);
    const fu = u - c0;
    const fv = v - r0;
    return bit(c0, r0) * (1 - fu) * (1 - fv) + bit(c0 + 1, r0) * fu * (1 - fv) +
           bit(c0, r0 + 1) * (1 - fu) * fv + bit(c0 + 1, r0 + 1) * fu * fv;
  }

  function pick(ramp, brightness) {
    return ramp[Math.min(ramp.length - 1, Math.floor(brightness * ramp.length))];
  }

  // Measures one character of the <pre> font and picks the grid size so the globe
  // is round and fits the available width.
  function layout() {
    let charW = 0;
    let rowH = 0;
    try {
      const probe = document.createElement('span');
      probe.style.cssText = 'position:absolute;visibility:hidden;display:inline-block;white-space:pre;';
      probe.textContent = 'MMMMMMMMMM\nM\nM\nM';   // 10 characters wide, 4 rows tall
      el.appendChild(probe);
      const box = probe.getBoundingClientRect();
      el.removeChild(probe);
      charW = box.width / 10;
      rowH = box.height / 4;
    } catch (e) { /* fall back to defaults below */ }

    const parent = el.parentElement || el;
    const style = window.getComputedStyle ? window.getComputedStyle(parent) : null;
    const avail = parent.clientWidth -
      (style ? (parseFloat(style.paddingLeft) || 0) + (parseFloat(style.paddingRight) || 0) : 0);

    if (charW > 0 && rowH > 0 && avail > 0) {
      // Globe width in pixels = rows * rowH, so this is the biggest globe that fits
      rows = Math.max(MIN_ROWS, Math.min(MAX_ROWS, Math.floor(avail * 0.95 / rowH)));
      cols = Math.round(rows * rowH / charW);
    } else {
      rows = MAX_ROWS;
      cols = MAX_ROWS * 2;
    }
  }

  // Draws one frame. lon0 = longitude (in degrees) facing the viewer.
  function drawFrame(lon0) {
    let out = '';
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Position on the disc: x to the right, y up, both from -1 to 1
        const x = (c + 0.5 - cols / 2) / (cols / 2);
        const y = -(r + 0.5 - rows / 2) / (rows / 2);
        const d2 = x * x + y * y;
        if (d2 > 1) { out += ' '; continue; }

        // Point on the sphere facing the viewer, converted to latitude/longitude
        const z = Math.sqrt(1 - d2);
        const lat = Math.asin(z * sinT + y * cosT) * 180 / Math.PI;
        const lon = lon0 + Math.atan2(x, z * cosT - y * sinT) * 180 / Math.PI;

        // Simple lighting: surface facing the light is brighter
        const diffuse = Math.max(0, x * L[0] + y * L[1] + z * L[2]);
        const brightness = Math.min(0.999, 0.10 + 0.90 * diffuse);

        out += landFraction(lon, lat) >= 0.5
          ? pick(LAND, brightness)
          : pick(OCEAN, brightness);
      }
      out += '\n';
    }
    return out;
  }

  // Describe the animation for screen readers (the characters themselves are just decoration)
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', 'A slowly rotating globe drawn with text characters');

  let lon0 = START_LON;
  const redraw = () => { layout(); el.textContent = drawFrame(lon0); };
  redraw();

  // Re-measure when the window is resized or when the page font has finished loading
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(redraw, 150);
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(redraw);

  const reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  // Animation loop: runs only while the globe is on screen
  let running = false;
  let last = 0;

  function tick(now) {
    if (!running) return;
    const dt = now - last;
    if (dt >= 1000 / FPS) {
      // Earth turns west to east, so the longitude facing us decreases
      lon0 -= SPEED_DEG_PER_SEC * Math.min(dt, 100) / 1000;
      el.textContent = drawFrame(lon0);
      last = now;
    }
    requestAnimationFrame(tick);
  }

  function setRunning(value) {
    if (value === running) return;
    running = value;
    if (running) {
      last = performance.now();
      requestAnimationFrame(tick);
    }
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => setRunning(entries[0].isIntersecting)).observe(el);
  } else {
    setRunning(true);
  }
})();