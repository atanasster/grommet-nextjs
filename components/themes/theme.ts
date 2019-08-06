import Color from 'color';
import ColorScheme from 'color-scheme';
import { deepMerge } from 'grommet/utils';
import { colorIsDark } from 'grommet/utils/colors';


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

enum SharpnessLevelType { rounded, soft, medium, hard }
interface SharpnessObjectType {
  global: { input: { border: { radius: string } }, drop: { border: { radius: string } } },
  button: { border: { radius: string } },
  checkBox: { check: { radius: string }, toggle: { radius: string } },
  layer: { border: { radius: string } },
}

type SharpnessType = {
  [key in keyof typeof SharpnessLevelType]: SharpnessObjectType
};

const SHARPNESS: SharpnessType = {
  rounded: {
    global: { input: { border: { radius: '24px' } }, drop: { border: { radius: '4px' } } },
    button: { border: { radius: '24px' } },
    checkBox: { check: { radius: '24px' }, toggle: { radius: '24px' } },
    layer: { border: { radius: '24px' } },
  },
  soft: {
    global: { input: { border: { radius: '16px' } }, drop: { border: { radius: '3px' } } },
    button: { border: { radius: '16px' } },
    checkBox: { check: { radius: '16px' },
    toggle: { radius: '4px' } },
    layer: { border: { radius: '16px' } },
  },
  medium: {
    global: { input: { border: { radius: '4px' } }, drop: { border: { radius: '2px' } } },
    button: { border: { radius: '4px' } },
    checkBox: { check: { radius: '4px' }, toggle: { radius: '2px' } },
    layer: { border: { radius: '4px' } },
  },
  hard: {
    global: { input: { border: { radius: '0px' } }, drop: { border: { radius: '0px' } } },
    button: { border: { radius: '0px' } },
    checkBox: { check: { radius: '0px' }, toggle: { radius: '0px' } },
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
  let result = {};
  const brandRGB = parseRGBString(color);
  const backgroundRGB = parseRGBString(backgroundColor);

  if (brandRGB && backgroundRGB) {
    const bgColor = Color.rgb(backgroundRGB[0], backgroundRGB[1], backgroundRGB[2]);
    const brandColor = Color.rgb(brandRGB[0], brandRGB[1], brandRGB[2]);
    let isDarkBrand;
    let isDarkBackground;
    try {
      isDarkBackground = colorIsDark(backgroundColor);
      isDarkBrand = colorIsDark(color);
    } catch (e) {
      return result;
    }
    let softerBackground;
    let textColor;
    if (isDarkBackground) {
      textColor = parseRGBString('#ebebeb');
      softerBackground = bgColor.lighten(0.05);
    } else {
      textColor = parseRGBString('#444444');
      softerBackground = bgColor.darken(0.05);
    }
    textColor = Color.rgb(textColor[0], textColor[1], textColor[2]);
    const border = {
      dark: '#ebebeb',
      light: '#444444',
    };
    const shadowColor = textColor.fade(0.5).rgb().string();

    const cs = new ColorScheme();
    cs.from_hex(color.replace('#', ''));
    const brandNormalized = {
      dark: isDarkBrand ? brandColor.negate().hex() : brandColor.hex(),
      light: isDarkBrand ? brandColor.hex() : brandColor.negate().hex(),
    };
    const colors = {
      brand: color,
      border,
      background: backgroundColor,
      placeholder: shadowColor,
      control: brandNormalized,
    };
    // create default controls colors
    result = {
      global: {
        colors,
        elevation: {
          none: 'none',
          xsmall: `0px 1px 2px ${shadowColor}`,
          small: `0px 2px 4px ${shadowColor}`,
          medium: `0px 3px 8px ${shadowColor}`,
          large: `0px 6px 12px ${shadowColor}`,
          xlarge: `0px 8px 16px ${shadowColor}`,
        },
        drop: {
          background: softerBackground.rgb().string(),
          shadow: `0px 3px 8px ${shadowColor}`,
        },
      },
      layer: {
        background: backgroundColor,
        overlay: {
          background: shadowColor,
        },
      },
      checkBox: {
        border: { color: border },
      },
      anchor: {
        color: brandNormalized,
      },
      heading: {
        font: false,
      },
      radioButton: {
        border: { color: border },
      },
    };
    // create theme palette
    const colorsTheme = cs
      .scheme(scheme)
      .variation(mood)
      .colors();
    const accentColors = 4;
    for (let i = 0; i < accentColors; i += 1) {
      result['global'].colors[`accent-${i + 1}`] = `#${colorsTheme[i]}`;
    }
    const neutralColors = 5;
    for (let i = accentColors; i < accentColors + neutralColors; i += 1) {
      result['global'].colors[`neutral-${(i - accentColors) + 1}`] = `#${colorsTheme[i]}`;
    }
  }
  return result;
};

interface FontType {
 family?: string,
 category?: string,
 face?: string,
}
export const themeFromFont = async (font: FontType): Promise<FontType> => {
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

export default ({
  color, background, mood, scheme, sharpness, font,
}) => {
  let theme = null;
  const colors = colorsForMood(color, background, mood, scheme);
  if (colors) {
    theme = { ...colors };
    theme = deepMerge(theme, SHARPNESS[sharpness]);
    theme = { ...theme, global: { ...theme.global, ...{ font: { ...font.theme } } } };
  }
  return theme;
};

