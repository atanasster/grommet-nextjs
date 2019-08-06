import React, { useState } from 'react';
import { deepFreeze } from 'grommet/utils';
import { black, materiallight, materialdark, metro, light } from 'grommet-controls/themes';
import { grommet, dark } from 'grommet/themes';
import { aruba } from 'grommet-theme-aruba';
import { dxc } from 'grommet-theme-dxc';
import { hp } from 'grommet-theme-hp';
import { hpe } from 'grommet-theme-hpe';
import { v1 } from 'grommet-theme-v1';

const defaultTheme = 'black';

const custom = deepFreeze({
  'global': {
    'colors': {
      'brand': '#99cc33',
      'border': {
        dark: '#f3f3f3',
        light: '#444444',
      },
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
      'background': 'rgb(255, 242, 201)',
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
    'background': '#fff8e1',
    'overlay': {
      'background': 'rgba(68, 68, 68, 0.5)',
    },
    'border': {
      'radius': '4px',
    },
  },
  'checkBox': {
    'border': {
      'color': {
        dark: '#f3f3f3',
        light: '#444444',
      },
      'check': {
        'radius': '4px',
      },
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
        dark: '#f3f3f3',
        light: '#444444',
      },
    },
  },
  'button': {
    'border': {
      'radius': '4px',
    },
  },
});


const defaultThemes = {
  grommet,
  black,
  materiallight,
  materialdark,
  metro,
  custom,
  light,
  aruba,
  dark,
  dxc,
  'grommet-v1': v1,
  hp,
  hpe,
};

interface AppThemeContextProps {
  themes: object,
  selected: string,
  selectTheme(theme: string): void,
  updateTheme(themeName: string, theme: object): void,
}
const AppThemeContext = React.createContext<Partial<AppThemeContextProps>>({});

const AppThemeContextProvider = ({ children }) => {
  const [state, setState] = useState(defaultTheme);
  const [themes, setThemes] = useState(defaultThemes);
  const updateTheme = (themeName: string, theme: object) => {
    setThemes({...themes, [themeName]: theme });
  };
  return (
    <AppThemeContext.Provider value={{
      themes,
      selected: state,
      selectTheme: (theme) => {
        if (theme) {
          setState(theme)
        }
      },
       updateTheme,
    }}>
      {children}
    </AppThemeContext.Provider>
  );
};

const AppThemeContextConsumer = AppThemeContext.Consumer;

export { AppThemeContext, AppThemeContextProvider, AppThemeContextConsumer}
