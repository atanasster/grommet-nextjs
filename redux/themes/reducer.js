import * as ActionTypes from './constants';
import black from '../../themes/black';
// eslint-disable-next-line camelcase
import material_light from '../../themes/material-light';
// eslint-disable-next-line camelcase
import material_dark from '../../themes/material-dark';
import metro from '../../themes/metro';

const defaultTheme = 'grommet';
const custom = {
  'global': {
    'colors': {
      'brand': '#99cc33',
      'accent': [
        '#c7e673',
        '#6f8040',
        '#dfe6cf',
        '#99bf30',
        '#68458a',
        '#604080',
      ],
      'neutral': [
        '#dacfe6',
        '#7830bf',
        '#d56b89',
        '#804052',
        '#e6cfd5',
        '#bf3059',
      ],
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
  'button': {
    'border': {
      'radius': '4px',
    },
  },
  'checkBox': {
    'border': {
      'radius': '4px',
    },
  },
  'layer': {
    'border': {
      'radius': '4px',
    },
  },
};
const initialState = {
  themes: {
    grommet: {},
    black,
    material_light,
    material_dark,
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
      console.log(action);
      return { ...state, selected: state.themes[action.name] ? action.name : defaultTheme };
    default:
      return state;
  }
};
