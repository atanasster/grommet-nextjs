import Color from 'color';
import ColorScheme from 'color-scheme';
import { parseRGBString } from './color';
import { deepMerge } from './object';

export const SHARPNESSES = [
  'soft',
  'medium',
  'hard',
];

export const SHARPNESS_ROUND_SIZE = {
  soft: 'large',
  medium: 'medium',
  hard: 'none',
};

const SHARPNESS = {
  soft: {
    global: { input: { border: { radius: '24px' } } },
    button: { border: { radius: '24px' } },
    checkBox: { border: { radius: '24px' } },
    layer: { border: { radius: '24px' } },
  },
  medium: {
    global: { input: { border: { radius: '4px' } } },
    button: { border: { radius: '4px' } },
    checkBox: { border: { radius: '4px' } },
    layer: { border: { radius: '4px' } },
  },
  hard: {
    global: { input: { border: { radius: '0px' } } },
    button: { border: { radius: '0px' } },
    checkBox: { border: { radius: '0px' } },
    layer: { border: { radius: '0px' } },
  },
};

export const MOODS = [
  'default',
  'pastel',
  'soft',
  'light',
  'hard',
  'pale',
];

export const SCHEMES = [
  'monochromatic',
  'contrast',
  'triade',
  'tetrade',
  'analogic',
];

const colorsForMood = (color, mood, scheme) => {
  let result;
  const array = parseRGBString(color);
  if (array) {
    const leadColor = Color.rgb(array[0], array[1], array[2]);
    const cs = new ColorScheme();
    cs.from_hex(color.replace('#', ''));
    const colors = cs
      .scheme(scheme)
      .variation(mood)
      .colors();
    console.log(leadColor.isDark());
    result = { global: { colors: { brand: color } } };
    const accentColors = Math.floor(colors.length / 2) + (colors.length % 2);
    result.global.colors.accent = [];
    for (let i = 0; i < accentColors; i += 1) {
      result.global.colors.accent.push(`#${colors[i]}`);
    }
    result.global.colors.neutral = [];
    for (let i = accentColors; i < colors.length; i += 1) {
      result.global.colors.neutral.push(`#${colors[i]}`);
    }
  }
  return result;
};

export const themeFromFont = async (font) => {
  if (font) {
    try {
      const url = `https://fonts.googleapis.com/css?family=${font.family}&subset=latin`;
      const cssFile = await fetch(url);
      const face = await cssFile.text();
      return {
        family: `'${font.family}', ${font.category}`,
        face,
      };
    } catch (e) {
      console.log(`error loading font face ${font.family}`);
    }
  }
  return {};
};

export const themeColors = (theme) => {
  const colors = ['brand'];
  theme.global.colors.accent.forEach((_, index) => colors.push(`accent-${index + 1}`));
  theme.global.colors.neutral.forEach((_, index) => colors.push(`neutral-${index + 1}`));
  if (theme.global.colors.status) {
    Object.keys(theme.global.colors.status).forEach(key => colors.push(`status-${key}`));
  }
  return colors;
};

export default ({
  color, mood, scheme, sharpness, font,
}) => {
  let theme = null;
  const colors = colorsForMood(color, mood, scheme);
  if (colors) {
    theme = { ...colors };
    theme = deepMerge(theme, SHARPNESS[sharpness]);
    theme = { ...theme, global: { ...theme.global, ...{ font: { ...font } } } };
  }
  return theme;
};

