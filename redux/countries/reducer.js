import * as ActionTypes from './constants';

const initialState = {
  all: [],
  selected: [],
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_SELECTED_COUNTRY: {
      const country = state.all.find(c => (c.code === action.country));
      return {
        ...state,
        selected: [...state.selected, country],
        search: null,
      };
    }
    case ActionTypes.REMOVE_SELECTED_COUNTRY:
      return {
        ...state,
        selected: state.selected.filter(c => (c.code !== action.country)),
        search: null,
      };
    case ActionTypes.CLEAR_SELECTED_COUNTRIES:
      return { ...state, selected: [] };
    default:
      return state;
  }
}
