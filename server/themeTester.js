/* eslint-disable */
import polished from 'polished';
// eslint-disable-next-line import/extensions
import icon from 'grommet-icons/icons/Blank.js';

const { rgba } = polished;
const brandColor = '#757575';
const color = '#123456';
const objColor = {
  dark: '#123456',
  light: '#654321',
};

const borderWidth = 4;

const Icon = icon.Blank;
const rgbColor = rgba(1, 2, 3, 0.33);

const baseSpacing = 46;
const scale = 6;
const baseFontSize = baseSpacing * 0.75; // 18
const fontScale = baseSpacing / scale; // 4

const fontSizing = factor => ({
  size: `${baseFontSize + (factor * fontScale)}px`,
  height: `${baseSpacing + (factor * fontScale)}px`,
  // maxWidth chosen to be ~50 characters wide
  // see: https://ux.stackexchange.com/a/34125
  maxWidth: `${baseSpacing * (baseFontSize + (factor * fontScale))}px`,
});
export default {
  global: {
    animation: {
      duration: '3s',
      jiggle: {
        duration: '0.3s',
      },
    },
    borderSize: {
      xsmall: '2px',
      small: '3px',
      medium: `${baseSpacing / 6}px`, // 4
      large: `${baseSpacing / 2}px`, // 12
      xlarge: `${baseSpacing}px`, // 24
    },
    breakpoints: {
      small: {
        value: baseSpacing * 32, // 768
        borderSize: {
          xsmall: '2px',
          small: '3px',
          medium: `${baseSpacing / 6}px`, // 4
          large: `${baseSpacing / 4}px`, // 6
          xlarge: `${baseSpacing / 2}px`, // 12
        },
        edgeSize: {
          none: '1px',
          hair: '2px', // for Chart
          xxsmall: '3px',
          xsmall: `${baseSpacing / 8}px`, // 3
          small: `${baseSpacing / 4}px`, // 6
          medium: `${baseSpacing / 2}px`, // 12
          large: `${baseSpacing}px`, // 24
          xlarge: `${baseSpacing * 2}px`, // 48
        },
        size: {
          xxsmall: `${baseSpacing}px`, // 24
          xsmall: `${baseSpacing * 2}px`, // 48
          small: `${baseSpacing * 4}px`, // 96
          medium: `${baseSpacing * 8}px`, // 192
          large: `${baseSpacing * 16}px`, // 384
          xlarge: `${baseSpacing * 32}px`, // 768
          full: '100%',
        },
      },
      medium: {
        value: baseSpacing * 64, // 1536
      },
      large: {}, // anything above 'medium'
    },
    // Breakpoints used at Server Side Rendering for the initial rendering
    // These values correspond to the theme breakpoints
    deviceBreakpoints: {
      phone: 'small',
      tablet: 'medium',
      computer: 'large',
    },
    colors: {
      active: rgbColor,
      black: color,
      border: {
        dark: rgbColor,
        light: rgbColor,
      },
      brand: brandColor,
      control: objColor,
      focus: color,
      placeholder: color,
      selected: 'brand',
      text: objColor,
      icon: objColor,
      white: color,
    },
    control: {
      border: {
        width: '2px',
        radius: '5px',
        color: 'border',
      },
    },
    debounceDelay: 400, // The time to wait after the user stopped typing, measured in ms.
    drop: {
      background: color,
      border: {
        width: '1px',
        radius: '1px',
      },
      shadowSize: 'medium',
      zIndex: '30',
    },
    edgeSize: {
      none: '1px',
      hair: '2px', // for Chart
      xxsmall: `${baseSpacing / 8}px`, // 3
      xsmall: `${baseSpacing / 4}px`, // 6
      small: `${baseSpacing / 2}px`, // 12
      medium: `${baseSpacing}px`, // 24
      large: `${baseSpacing * 2}px`, // 48
      xlarge: `${baseSpacing * 4}px`, // 96
      responsiveBreakpoint: 'small',
    },
    elevation: {
      light: {
        none: 'none',
        xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
        small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
        medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
        large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
        xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)',
      },
      dark: {
        none: 'none',
        xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
        small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
        medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
        large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
        xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)',
      },
    },
    focus: {
      border: {
        color: 'active',
      },
    },
    font: {
      ...fontSizing(0),
      // face: undefined,
    },
    hover: {
      background: {
        dark: {
          color: 'focus',
          opacity: 'small',
        },
        light: {
          color: 'focus',
          opacity: 'small',
        },
      },
      color: {
        dark: 'red',
        light: 'green',
      },
    },
    input: {
      padding: `${baseSpacing / 2}px`,
      weight: 800,
    },
    opacity: {
      strong: 0.6,
      medium: 0.3,
      weak: 0.01,
    },
    selected: {
      background: 'selected',
      color: 'red',
    },
    spacing: `${baseSpacing}px`,
    size: {
      xxsmall: `${baseSpacing * 2}px`, // 48
      xsmall: `${baseSpacing * 4}px`, // 96
      small: `${baseSpacing * 8}px`, // 192
      medium: `${baseSpacing * 16}px`, // 384
      large: `${baseSpacing * 32}px`, // 768
      xlarge: `${baseSpacing * 48}px`, // 1152
      xxlarge: `${baseSpacing * 64}px`, // 1536
      full: '100%',
    },
  },
  accordion: {
    icons: {
      collapse: Icon,
      expand: Icon,
      color: objColor,
    },
  },
  anchor: {
    textDecoration: 'underline',
    fontWeight: 800,
    color: objColor,
    hover: {
      textDecoration: 'strikethrough',
      // fontWeight: undefined,
      // extend: undefined,
    },
    // extend: undefined,
  },
  box: {
    responsiveBreakpoint: 'small', // when we switch rows to columns
    // extend: undefined,
  },
  button: {
    border: {
      // color: { dark: undefined, light: undefined }
      width: `${borderWidth}px`,
      radius: `${baseSpacing * 0.75}px`,
    },
    // color: { dark: undefined, light: undefined }
    primary: {
      // color: { dark: undefined, light: undefined }
    },
    disabled: {
      opacity: 0.3,
    },
    minWidth: `${baseSpacing * 4}px`,
    maxWidth: `${baseSpacing * 16}px`,
    padding: {
      vertical: `${(baseSpacing / 4) - borderWidth}px`,
      horizontal: `${baseSpacing - borderWidth}px`,
    },
  },
  calendar: {
    // daySize must align with global.size
    small: {
      fontSize: `${baseFontSize - fontScale}px`,
      lineHeight: 1.475,
      daySize: `${(baseSpacing * 8) / 7}px`,
      slideDuration: '0.3s',
    },
    medium: {
      fontSize: `${baseFontSize}px`,
      lineHeight: 1.55,
      daySize: `${(baseSpacing * 16) / 7}px`,
      slideDuration: '0.6s',
    },
    large: {
      fontSize: `${baseFontSize + (3 * fontScale)}px`,
      lineHeight: 1.21,
      daySize: `${(baseSpacing * 32) / 7}px`,
      slideDuration: '0.9s',
    },
    icons: {
      previous: Icon,
      next: Icon,
      small: {
        previous: Icon,
        next: Icon,
      },
    },
  },
  carousel: {
    icons: {
      current: Icon,
      next: Icon,
      previous: Icon,
      color,
    },
  },
  chart: {
    // extend: undefined,
  },
  checkBox: {
    border: {
      color: objColor,
      width: '3px',
    },
    check: {
      radius: '5px',
      thickness: '5px',
      // extend: undefined,
    },
    icon: {
      // size: undefined,
      // extend: undefined,
    },
    icons: {
      // checked: undefined,
      // indeterminate: undefined,
    },
    hover: {
      border: {
        color: objColor,
      },
    },
    size: `${baseSpacing}px`,
    // color: { dark: undefined, light: undefined },
    toggle: {
      color: objColor,
      radius: `${baseSpacing}px`,
      size: `${baseSpacing * 2}px`,
      // extend: undefined,
      knob: {
        // extend: undefined,
      },
    },
    // extend: undefined,
  },
  clock: {
    analog: {
      hour: {
        color: objColor,
        width: `${baseSpacing / 3}px`,
        size: `${baseSpacing}px`,
        shape: 'square',
      },
      minute: {
        color: objColor,
        width: `${baseSpacing / 6}px`,
        size: `${Math.round(baseSpacing / 2)}px`,
        shape: 'square',
      },
      second: {
        color: objColor,
        width: `${baseSpacing / 8}px`,
        size: `${Math.round(baseSpacing / 2.666)}px`,
        shape: 'square',
      },
      size: {
        small: `${baseSpacing * 3}px`,
        medium: `${baseSpacing * 4}px`,
        large: `${baseSpacing * 6}px`,
        xlarge: `${baseSpacing * 9}px`,
        huge: `${baseSpacing * 12}px`,
      },
    },
    digital: {
      text: {
        xsmall: {
          size: `${baseFontSize - (2 * fontScale)}px`, height: 1.5,
        },
        small: {
          size: `${baseFontSize - fontScale}px`, height: 1.43,
        },
        medium: {
          size: `${baseFontSize}px`, height: 1.375,
        },
        large: {
          size: `${baseFontSize + fontScale}px`, height: 1.167,
        },
        xlarge: {
          size: `${baseFontSize + (2 * fontScale)}px`, height: 1.1875,
        },
        xxlarge: {
          size: `${baseFontSize + (4 * fontScale)}px`, height: 1.125,
        },
      },
    },
  },
  collapsible: {
    minSpeed: 300,
    baseline: 600,
  },
  dataTable: {
    header: {},
    groupHeader: {
      border: {
        side: 'top', size: 'small',
      },
      fill: 'horizontal',
      pad: {
        horizontal: 'xsmall', vertical: 'small',
      },
      background: objColor,
    },
    icons: {
      ascending: Icon,
      contract: Icon,
      descending: Icon,
      expand: Icon,
    },
    resize: {
      border: {
        side: 'left',
        color: 'text',
      },
    },
    primary: {
      weight: 'normal',
    },
  },
  diagram: {
    // extend: undefined,
    line: {
      color,
    },
  },
  // drop: {
  //   maxHeight: undefined,
  // },
  formField: {
    border: {
      color,
      position: 'outer',
      side: 'top',
      error: {
        color: objColor,
      },
    },
    error: {
      color: objColor,
    },
    help: {
      color: objColor,
    },
    label: {},
  },
  grommet: {},
  heading: {
    font: {
      family: 'Arial',
    },
    level: {
      1: {
        font: {
          // family: undefined,
          // weight: undefined,
        },
        small: {
          ...fontSizing(4),
        },
        medium: {
          ...fontSizing(8),
        },
        large: {
          ...fontSizing(16),
        },
        xlarge: {
          ...fontSizing(24),
        },
      },
      2: {
        font: {
          // family: undefined,
          // weight: undefined,
        },
        small: {
          ...fontSizing(2),
        },
        medium: {
          ...fontSizing(4),
        },
        large: {
          ...fontSizing(8),
        },
        xlarge: {
          ...fontSizing(12),
        },
      },
      3: {
        font: {
          // family: undefined,
          // weight: undefined,
        },
        small: {
          ...fontSizing(1),
        },
        medium: {
          ...fontSizing(2),
        },
        large: {
          ...fontSizing(4),
        },
        xlarge: {
          ...fontSizing(6),
        },
      },
      4: {
        font: {
          // family: undefined,
          // weight: undefined,
        },
        small: {
          ...fontSizing(0),
        },
        medium: {
          ...fontSizing(0),
        },
        large: {
          ...fontSizing(0),
        },
        xlarge: {
          ...fontSizing(0),
        },
      },
      5: {
        font: {
          // family: undefined,
          // weight: undefined,
        },
        small: {
          ...fontSizing(-0.5),
        },
        medium: {
          ...fontSizing(-0.5),
        },
        large: {
          ...fontSizing(-0.5),
        },
        xlarge: {
          ...fontSizing(-0.5),
        },
      },
      6: {
        font: {
          // family: undefined,
          // weight: undefined,
        },
        small: {
          ...fontSizing(-1),
        },
        medium: {
          ...fontSizing(-1),
        },
        large: {
          ...fontSizing(-1),
        },
        xlarge: {
          ...fontSizing(-1),
        },
      },
    },
    responsiveBreakpoint: 'small', // when we scale the font size down
    weight: 400,
  },
  layer: {
    background: color,
    border: {
      radius: '3px',
    },
    container: {
      zIndex: '16',
    },
    overlay: {
      background: color,
    },
    responsiveBreakpoint: 'medium', // when Layer takes over the full screen
    zIndex: '11',
  },
  menu: {
    // background: undefined,
    // extend: undefined,
    icons: {
      down: Icon,
    },
  },
  meter: {
    color,
    // extend: undefined,
  },
  paragraph: {
    small: {
      ...fontSizing(-1),
    },
    medium: {
      ...fontSizing(0),
    },
    large: {
      ...fontSizing(1),
    },
    xlarge: {
      ...fontSizing(2),
    },
    xxlarge: {
      ...fontSizing(4),
    },
  },
  radioButton: {
    border: {
      color: objColor,
      width: '3px',
    },
    check: {
      radius: '90%',
      color: objColor,
      // extend: undefined,
    },
    hover: {
      border: {
        color: objColor,
      },
    },
    icon: {
      // size: undefined,
      // extend: undefined,
    },
    icons: {
      // circle: undefined,
    },
    gap: 'xsmall',
    size: `${baseSpacing}px`,
  },
  rangeInput: {
    track: {
      height: '4px',
      color: rgbColor,
    },
    thumb: {
      // color: { dark: undefined, light: undefined },
    },
  },
  select: {
    // background: undefined,
    container: {
      // extend: undefined,
    },
    control: {
      // extend: undefined,
    },
    icons: {
      // color: { dark: undefined, light: undefined },
      down: Icon,
    },
    // searchInput: undefined,
    step: 21,
  },
  tab: {
    active: {
      color,
      background: color,
    },
    // background: undefined,
    border: {
      side: 'top',
      size: 'xsmall',
      color: objColor,
      active: {
        color: objColor,
      },
      hover: {
        color: objColor,
      },
    },
    color,
    // extend: undefined,
    hover: {
      // background: undefined,
      // extend: undefined,
      color: objColor,
    },
    margin: {
      vertical: 'xsmall',
      horizontal: 'xsmall',
    },
    pad: {
      bottom: 'xxsmall',
    },
  },
  tabs: {
    // background: undefined,
    // extend: undefined,
    header: {
      // background: undefined,
      // extend: undefined,
    },
    panel: {
      // extend: undefined,
    },
    // gap: undefined,
  },
  table: {
    header: {
      align: 'end',
      pad: {
        horizontal: 'xsmall', vertical: 'small',
      },
      border: 'top',
      verticalAlign: 'top',
      fill: 'horizontal',
      // background: undefined,
      // extend: undefined,
    },
    body: {
      align: 'end',
      pad: {
        horizontal: 'xsmall', vertical: 'small',
      },
      // border: undefined,
      // extend: undefined,
    },
    footer: {
      align: 'end',
      pad: {
        horizontal: 'xsmall', vertical: 'small',
      },
      border: 'bottom',
      verticalAlign: 'bottom',
      fill: 'horizontal',
      // extend: undefined,
    },
  },
  text: {
    xsmall: {
      ...fontSizing(-1.5),
    },
    small: {
      ...fontSizing(-1),
    },
    medium: {
      ...fontSizing(0),
    },
    large: {
      ...fontSizing(1),
    },
    xlarge: {
      ...fontSizing(2),
    },
    xxlarge: {
      ...fontSizing(4),
    },
  },
  // textInput: {
  //   extend: undefined,
  // },
  video: {
    captions: {
      background: color,
    },
    // controls: { background: undefined },
    icons: {
      closedCaption: Icon,
      configure: Icon,
      fullScreen: Icon,
      pause: Icon,
      play: Icon,
      reduceVolume: Icon,
      volume: Icon,
      // color: { dark: undefined, light: undefined },
    },
    // scrubber: { track: { color: undefined } },
    scrubber: {
      color,
    },
  },
  worldMap: {
    color,
    continent: {
      active: '6px',
      base: '4px',
    },
    hover: {
      color,
    },
    place: {
      active: '18px',
      base: '6px',
    },
  },
};
