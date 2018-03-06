import * as ActionTypes from './constants';


const initialState = [];

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_NOTIFICATION:
      return [action.notification, ...state];
    case ActionTypes.REMOVE_NOTIFICATION:
      return state.filter(notification => notification.id !== action.id);
    default:
      return state;
  }
}
