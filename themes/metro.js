import { deepFreeze } from '../utils/object';

const brandColor = '#0072c6';
const accentColors = ['#128023', '#fa6800', '#0050ef', '#d80073', '#008a00', '#00aff0', '#f0a30a', '#825a2c', '#63362f', '#81003c', '#4b0096'];
const neutralColors = ['#a4c400', '#00aba9', '#6d8764', '#647687', '#76608a', '#87794e',
  '#607D8B', '640024', '#1b6eae', '#00356a', '#004050', '#003e00', '#bf5a15', '#9a1616',
  '#57169a', '#4390df', '#da5a53', '#7ad61d', '#00ccff', '#45fffd', '#78aa1c', '#ffc194', '#f472d0'];
const statusColors = {
  critical: '#ce352c',
  error: '#a20025',
  warning: '#e3c800',
  ok: '#60a917',
  unknown: '#eeeeee',
  disabled: '#999999',
};
const shadowColor = 'rgba(0, 86, 150, 0.50)';

export default deepFreeze({
  global: {
    colors: {
      accent: accentColors,
      brand: brandColor,
      neutral: neutralColors,
      status: statusColors,
      black: brandColor,
    },
    drop: {
      backgroundColor: '#005696',
      border: {
        width: '0px',
        radius: '0px',
      },
      shadow: `0px 3px 8px ${shadowColor}`,
    },
    focus: {
      border: {
        color: brandColor,
      },
    },
    elevation: {
      none: 'none',
      xsmall: `0px 1px 2px ${shadowColor}`,
      small: `0px 2px 4px ${shadowColor}`,
      medium: `0px 3px 8px ${shadowColor}`,
      large: `0px 6px 12px ${shadowColor}`,
      xlarge: `0px 8px 16px ${shadowColor}`,
    },
    font: {
      family: "'Open Sans', sans-serif",
      face: `
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 300;
          src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 600;
          src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 800;
          src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'), url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN8rsOUuhpKKSTjw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `,
      size: '16px',
    },
    input: {
      border: {
        radius: '0px',
      },
    },
  },
  button: {
    border: {
      radius: '0px',
    },
  },
  checkBox: {
    border: {
      color: {
        light: 'rgba(0, 188, 212, 0.5)',
        dark: 'rgba(255, 255, 255, 0.5)',
      },
      radius: '0px',
    },
    check: {
      color: brandColor,
    },
    toggle: {
      color: '#9E9E9E',
    },
  },
  layer: {
    backgroundColor: '#005696',
    border: {
      radius: '0px',
    },
  },
  radioButton: {
    border: {
      color: {
        light: 'rgba(0, 188, 212, 0.5)',
        dark: 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
});
