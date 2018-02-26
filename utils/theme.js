import Color from 'color';
import ColorScheme from 'color-scheme';
import { deepMerge } from './object';

export const SHARPNESSES = [
  'rounded',
  'soft',
  'medium',
  'hard',
];

export const SHARPNESS_ROUND_SIZE = {
  rounded: 'x-large',
  soft: 'large',
  medium: 'medium',
  hard: 'none',
};

const SHARPNESS = {
  rounded: {
    global: { input: { border: { radius: '24px' } }, drop: { border: { radius: '4px' } } },
    button: { border: { radius: '24px' } },
    checkBox: { border: { radius: '24px' } },
    layer: { border: { radius: '24px' } },
  },
  soft: {
    global: { input: { border: { radius: '16px' } }, drop: { border: { radius: '3px' } } },
    button: { border: { radius: '16px' } },
    checkBox: { border: { radius: '16px' } },
    layer: { border: { radius: '16px' } },
  },

  medium: {
    global: { input: { border: { radius: '4px' } }, drop: { border: { radius: '2px' } } },
    button: { border: { radius: '4px' } },
    checkBox: { border: { radius: '4px' } },
    layer: { border: { radius: '4px' } },
  },
  hard: {
    global: { input: { border: { radius: '0px' } }, drop: { border: { radius: '0px' } } },
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

const COLOR_REGEXP = new RegExp(/[A-Za-z0-9]{2}/, 'g');

export const parseRGBString = (str) => {
  const match = str.match(COLOR_REGEXP);
  if (match && match.length === 3) {
    return match.map(v => parseInt(v, 16));
  }
  return undefined;
};

const colorsForMood = (color, backgroundColor, mood, scheme) => {
  let result;
  const brandRGB = parseRGBString(color);
  const backgroundRGB = parseRGBString(backgroundColor);

  if (brandRGB && backgroundRGB) {
    const bgColor = Color.rgb(backgroundRGB[0], backgroundRGB[1], backgroundRGB[2]);
    const textColor = bgColor.negate();
    let shadow;
    let softerBackground;
    const border = textColor.fade(0.4);
    const colorStep = 0.2;

    if (textColor.isDark()) {
      shadow = textColor.lighten(0.3);
      softerBackground = bgColor.blacken(colorStep);
    } else {
      shadow = textColor.darken(0.3);
      softerBackground = bgColor.whiten(colorStep);
    }
    const colorSteps = (Array.from(Array(6).keys()));
    const light = colorSteps.map(index =>
      softerBackground.whiten((index + 1) * colorStep).rgb().string());
    const dark = colorSteps.map(index =>
      softerBackground.blacken((index + 1) * colorStep).rgb().string());
    const cs = new ColorScheme();
    cs.from_hex(color.replace('#', ''));
    // create default controls colors
    result = {
      global: {
        colors: {
          brand: color,
          border: border.rgb().string(),
          background: bgColor.rgb().string(),
          text: textColor.rgb().string(),
          placeholder: shadow.rgb().string(),
          darkBackground: {
            text: textColor.rgb().string(),
          },
          light: textColor.isDark() ? dark : light,
          dark: textColor.isDark() ? light : dark,
        },
        drop: {
          backgroundColor: softerBackground.rgb().string(),
        },
      },
      layer: {
        backgroundColor,
      },
    };
    // create theme palette
    const colors = cs
      .scheme(scheme)
      .variation(mood)
      .colors();
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
  color, background, mood, scheme, sharpness, font,
}) => {
  let theme = null;
  const colors = colorsForMood(color, background, mood, scheme);
  if (colors) {
    theme = { ...colors };
    theme = deepMerge(theme, SHARPNESS[sharpness]);
    theme = { ...theme, global: { ...theme.global, ...{ font: { ...font } } } };
    // console.log(theme);
  }
  return theme;
};

