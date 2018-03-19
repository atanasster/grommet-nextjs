import * as ActionTypes from './constants';

export const addSelectedCoutry = country => ({ type: ActionTypes.ADD_SELECTED_COUNTRY, country });

export const removeSelectedCoutry =
    country => ({ type: ActionTypes.REMOVE_SELECTED_COUNTRY, country });

export const clearSelectedCoutries = () => ({ type: ActionTypes.CLEAR_SELECTED_COUNTRIES });
