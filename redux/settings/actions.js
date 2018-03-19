import * as ActionTypes from './constants';

export const changeDefaultCurrency = currency => (
  { type: ActionTypes.CHANGE_DEFAULT_CURRENCY, currency }
);

export const changeDefaultExchange = exchange => (
  { type: ActionTypes.CHANGE_DEFAULT_EXCHANGE, exchange }
);
