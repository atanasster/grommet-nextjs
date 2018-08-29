// eslint-disable-next-line camelcase
import { deepFreeze } from 'grommet/utils/object';
import { rgba } from 'polished';
import { css } from 'styled-components';
import { black, materiallight, materialdark, metro } from 'grommet-controls/themes';
import { colorsFromArray } from 'grommet-controls/themes/utils';
import { dark } from 'grommet/themes/dark';
import { grommet } from 'grommet/themes/grommet';
import * as ActionTypes from './constants';


const defaultTheme = 'black';
const lightColors = [
  '#F6F6F6',
  '#EEEEEE',
  '#DDDDDD',
  '#CCCCCC',
  '#BBBBBB',
  '#AAAAAA',
];
const darkColors = [
  '#333333',
  '#444444',
  '#555555',
  '#666666',
  '#777777',
  '#999999',
];
const accentColors = [
  '#c7e673',
  '#6f8040',
  '#dfe6cf',
  '#99bf30',
  '#68458a',
  '#604080',
];
const neutralColors = [
  '#dacfe6',
  '#7830bf',
  '#d56b89',
  '#804052',
  '#e6cfd5',
  '#bf3059',
];

const colors = {
  'active': rgba('#DDDDDD', 0.5),
  'brand': '#99cc33',
  'border': 'rgba(68, 68, 68, 0.6)',
  'background': 'rgb(255, 248, 225)',
  'text': 'rgb(68, 68, 68)',
  'placeholder': 'rgba(68, 68, 68, 0.5)',
};

colorsFromArray(colors, accentColors, 'accent');
colorsFromArray(colors, darkColors, 'dark');
colorsFromArray(colors, lightColors, 'light');
colorsFromArray(colors, neutralColors, 'neutral');

const custom = deepFreeze({
  'global': {
    'colors': colors,
    'elevation': {
      'none': 'none',
      'xsmall': '0px 1px 2px rgba(68, 68, 68, 0.5)',
      'small': '0px 2px 4px rgba(68, 68, 68, 0.5)',
      'medium': '0px 3px 8px rgba(68, 68, 68, 0.5)',
      'large': '0px 6px 12px rgba(68, 68, 68, 0.5)',
      'xlarge': '0px 8px 16px rgba(68, 68, 68, 0.5)',
    },
    'drop': {
      'backgroundColor': 'rgb(255, 242, 201)',
      'shadow': '0px 3px 8px rgba(68, 68, 68, 0.5)',
      'border': {
        'radius': '2px',
      },
    },
    'input': {
      'border': {
        'radius': '4px',
      },
    },
    'font': {
      'family': "'Roboto', sans-serif",
      'face': "@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxP.ttf) format('truetype');\n}\n",
    },
  },
  'layer': {
    'backgroundColor': '#fff8e1',
    'overlayBackgroundColor': 'rgba(68, 68, 68, 0.5)',
    'border': {
      'radius': '4px',
    },
  },
  'icon': {
    extend: css`
      ${props => props.dark && `
        fill: ${props.theme.global.text.color.dark};
        stroke: ${props.theme.global.text.color.dark};
      `}
      ${props => props.light && `
        fill: ${props.theme.global.text.color.light};
        stroke: ${props.theme.global.text.color.light};
      `}
    `,
  },
  'checkBox': {
    'border': {
      'color': {
        'light': 'rgba(68, 68, 68, 0.6)',
        'dark': 'rgba(68, 68, 68, 0.6)',
      },
      'radius': '4px',
    },
    'toggle': {
      'radius': '2px',
    },
  },
  'anchor': {
    'color': 'rgb(102, 51, 204)',
  },
  'radioButton': {
    'border': {
      'color': {
        'light': 'rgba(68, 68, 68, 0.6)',
        'dark': 'rgba(68, 68, 68, 0.6)',
      },
    },
  },
  'button': {
    'border': {
      'radius': '4px',
    },
  },
  'heading': {
    font: false,
  },
});
const initialState = {
  themes: {
    grommet,
    dark,
    black,
    materiallight,
    materialdark,
    metro,
    custom,
  },
  selected: defaultTheme,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_THEME:
      return {
        ...state,
        themes: { ...state.themes, [action.name]: action.theme },
        selected: action.name,
      };
    case ActionTypes.DELETE_THEME: {
      const { [action.name]: omit, ...rest } = this.state.themes;
      return { ...state, themes: rest };
    }
    case ActionTypes.SELECT_THEME:
      return { ...state, selected: state.themes[action.name] ? action.name : defaultTheme };
    default:
      return state;
  }
};
