const COLOR_REGEXP = new RegExp(/[A-Za-z0-9]{2}/, 'g');

export const parseRGBString = (str) => {
  const match = str.match(COLOR_REGEXP);
  if (match && match.length === 3) {
    return match.map(v => parseInt(v, 16));
  }
  return undefined;
};

export const toRGBString = array => array.map(v => v.toString(16)).join('');

// From https://stackoverflow.com/a/9493060/8513067

const hue2rgb = (p, q, t) => {
  let nt = t;
  if (t < 0) nt += 1;
  if (t > 1) nt -= 1;
  if (nt < 1 / 6) return p + ((q - p) * 6 * nt);
  if (nt < 1 / 2) return q;
  if (nt < 2 / 3) return p + ((q - p) * ((2 / 3) - nt) * 6);
  return p;
};

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
export const hslToRgb = (h, s, l) => {
  let r;
  let g;
  let b;

  if (s === 0) {
    // achromatic
    r = l;
    g = l;
    b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : (l + s) - (l * s);
    const p = (2 * l) - q;
    r = hue2rgb(p, q, h + (1 / 3));
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - (1 / 3));
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   {number}  r       The red color value
 * @param   {number}  g       The green color value
 * @param   {number}  b       The blue color value
 * @return  {Array}           The HSL representation
 */
export const rgbToHsl = (r, g, b) => {
  const nr = r / 255.0;
  const ng = g / 255.0;
  const nb = b / 255.0;
  const max = Math.max(nr, ng, nb);
  const min = Math.min(nr, ng, nb);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max === min) {
    // achromatic
    h = 0;
    s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case nr: h = ((ng - nb) / d) + (ng < nb ? 6 : 0); break;
      case ng: h = ((nb - nr) / d) + 2; break;
      case nb: h = ((nr - ng) / d) + 4; break;
      default: console.error('Bug in rgbToHsl');
    }
    h /= 6;
  }

  return [h, s, l];
};
