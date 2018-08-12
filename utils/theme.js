import Color from 'color';
import ColorScheme from 'color-scheme';
import { colorIsDark } from 'grommet/utils/colors';
import { deepMerge } from 'grommet/utils/object';

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
    tag: { border: { round: 'medium' } },
  },
  soft: {
    global: { input: { border: { radius: '16px' } }, drop: { border: { radius: '3px' } } },
    button: { border: { radius: '16px' } },
    checkBox: { border: { radius: '16px' }, toggle: { radius: '4px' } },
    layer: { border: { radius: '16px' } },
    tag: { border: { round: 'small' } },
  },

  medium: {
    global: { input: { border: { radius: '4px' } }, drop: { border: { radius: '2px' } } },
    button: { border: { radius: '4px' } },
    checkBox: { border: { radius: '4px' }, toggle: { radius: '2px' } },
    layer: { border: { radius: '4px' } },
  },
  hard: {
    global: { input: { border: { radius: '0px' } }, drop: { border: { radius: '0px' } } },
    button: { border: { radius: '0px' } },
    checkBox: { border: { radius: '0px' }, toggle: { radius: '0px' } },
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

    let isDarkBackground;
    try {
      isDarkBackground = colorIsDark(backgroundColor);
    } catch (e) {
      return result;
    }
    let softerBackground;
    let light;
    let dark;
    let textColor;
    if (isDarkBackground) {
      textColor = parseRGBString('#ebebeb');
      softerBackground = bgColor.lighten(0.05);
      light = ['#333333', '#555555', '#666666', '#777777', '#999999', '#AAAAAA'];
      dark = ['#F6F6F6', '#EEEEEE', '#DDDDDD', '#CCCCCC', '#BBBBBB', '#AAAAAA'];
    } else {
      textColor = parseRGBString('#444444');
      softerBackground = bgColor.darken(0.05);
      dark = ['#333333', '#444444', '#555555', '#666666', '#777777', '#999999'];
      light = ['#F6F6F6', '#EEEEEE', '#DDDDDD', '#CCCCCC', '#BBBBBB', '#AAAAAA'];
    }
    textColor = Color.rgb(textColor[0], textColor[1], textColor[2]);
    const border = textColor.fade(0.4);
    const shadowColor = textColor.fade(0.5).rgb().string();

    const cs = new ColorScheme();
    cs.from_hex(color.replace('#', ''));
    const colors = {
      brand: color,
      light,
      dark,
      border: border.rgb().string(),
      background: bgColor.rgb().string(),
      text: textColor.rgb().string(),
      placeholder: shadowColor,
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
          backgroundColor: softerBackground.rgb().string(),
          shadow: `0px 3px 8px ${shadowColor}`,
        },
      },
      layer: {
        backgroundColor,
        overlayBackgroundColor: shadowColor,
      },
      icon: {
        color: textColor.rgb().string(),
      },
      checkBox: {
        border: {
          color: {
            light: border.rgb().string(),
            dark: border.rgb().string(),
          },
        },
      },
      anchor: {
        color: brandColor.negate().rgb().string(),
      },
      heading: {
        font: false,
      },
      radioButton: {
        border: {
          color: {
            light: border.rgb().string(),
            dark: border.rgb().string(),
          },
        },
      },
    };
    // create theme palette
    const colorsTheme = cs
      .scheme(scheme)
      .variation(mood)
      .colors();
    const accentColors = Math.floor(colorsTheme.length / 2) + (colorsTheme.length % 2);
    for (let i = 0; i < accentColors; i += 1) {
      result.global.colors[`accent-${i + 1}`] = `#${colorsTheme[i]}`;
    }
    for (let i = accentColors; i < colorsTheme.length; i += 1) {
      result.global.colors[`neutral-${(i - accentColors) + 1}`] = `#${colorsTheme[i]}`;
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

