import * as ActionTypes from './constants';

export const signIn = ({ user, tokens }) => (
  {
    type: ActionTypes.AUTH_USER,
    user,
    tokens,
  }
);

export const setTokens = ({ accessToken, refreshToken }) => (
  { type: ActionTypes.AUTH_SET_TOKENS, accessToken, refreshToken }
);

export const signOut = () => (
  { type: ActionTypes.AUTH_ANONYMOUS }
);
