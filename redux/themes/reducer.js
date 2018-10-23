// eslint-disable-next-line camelcase
import { deepFreeze } from 'grommet/utils';
import { black, materiallight, materialdark, metro, light } from 'grommet-controls/themes';
import { grommet, dark } from 'grommet/themes';
import { aruba } from 'grommet-theme-aruba';
import { dxc } from 'grommet-theme-dxc';
import { hp } from 'grommet-theme-hp';
import { hpe } from 'grommet-theme-hpe';

import * as ActionTypes from './constants';


const defaultTheme = 'black';

const custom = deepFreeze({
  'global': {
    'colors': {
      'brand': '#99cc33',
      'border': '#444444',
      'background': '#FFF8E1',
      'placeholder': 'rgba(68, 68, 68, 0.5)',
      'control': {
        'dark': '#99CC33',
        'light': '#6633CC',
      },
      'accent-1': '#c7e673',
      'accent-2': '#6f8040',
      'accent-3': '#dfe6cf',
      'accent-4': '#99bf30',
      'neutral-1': '#68458a',
      'neutral-2': '#604080',
      'neutral-3': '#dacfe6',
      'neutral-4': '#7830bf',
      'neutral-5': '#d56b89',
    },
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
    'color': {
      'dark': '#99CC33',
      'light': '#6633CC',
    },
  },
  'heading': {
    'font': false,
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
});

const initialState = {
  themes: {
    light,
    aruba,
    black,
    dark,
    dxc,
    grommet,
    hp,
    hpe,
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
