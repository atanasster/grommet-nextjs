import * as ActionTypes from './constants';
import { removeItem, setItem, getItem } from '../storage';

export const saveTokens = async ({ accessToken, refreshToken }) => {
  await setItem('accessToken', accessToken);
  await setItem('refreshToken', refreshToken);
};

export const removeTokens = async () => {
  await removeItem('accessToken');
  await removeItem('refreshToken');
};

const initialState = {
  user: undefined,
  accessToken: undefined,
  refreshToken: undefined,
};

if (process.browser) {
  getItem('accessToken').then((token) => { initialState.accessToken = token; });
  getItem('refreshToken').then((token) => { initialState.refreshToken = token; });
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER: {
      const newState = {
        ...state,
        user: action.user,
      };
      if (action.tokens) {
        saveTokens(action.tokens);
        newState.accessToken = action.tokens.accessToken;
        newState.refreshToken = action.tokens.refreshToken;
      }
      return newState;
    }
    case ActionTypes.AUTH_ANONYMOUS: {
      removeTokens();
      return {
        ...state, user: undefined, accessToken: undefined, refreshToken: undefined,
      };
    }
    case ActionTypes.AUTH_SET_TOKENS: {
      saveTokens(action);
      return { ...state, accessToken: action.accessToken, refreshToken: action.refreshToken };
    }
    default:
      return state;
  }
};
