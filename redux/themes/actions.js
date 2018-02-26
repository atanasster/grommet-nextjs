import * as ActionTypes from './constants';

export const updateTheme = (name, theme) => (
  { type: ActionTypes.UPDATE_THEME, name, theme }
);

export const deleteTheme = name => (
  { type: ActionTypes.DELETE_THEME, name }
);

export const selectTheme = name => (
  { type: ActionTypes.SELECT_THEME, name }
);
