import * as ActionTypes from './constants';

// noinspection JSAnnotator
const initialState = {
  responsive: false,
  active: false,
  manual_active: false,
  items: [
    { path: `${ActionTypes.SITE_ROOT}/markets`, label: 'markets', a11yTitle: 'Market cap table of crypto coins' },
    { path: `${ActionTypes.SITE_ROOT}/exchanges`, label: 'exchanges', a11yTitle: 'List of exchanges' },
    { path: `${ActionTypes.SITE_ROOT}/coins`, label: 'coins', a11yTitle: 'List of coins' },
    { path: `${ActionTypes.SITE_ROOT}/coins/icos`, label: 'ICOs', a11yTitle: 'List of ative and upcoming initial coin offerings' },
    {
      path: `${ActionTypes.SITE_ROOT}/coins/general?symbol=BTC`,
      as: `${ActionTypes.SITE_ROOT}/coins/general/BTC`,
      label: 'bitcoin',
      a11yTitle: 'Information about BitCoin',
    },
    {
      path: `${ActionTypes.SITE_ROOT}/coins/general?symbol=ETH`,
      as: `${ActionTypes.SITE_ROOT}/coins/general/ETH`,
      label: 'ethereum',
      a11yTitle: 'Information about Ethereum',
    },
  ],
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_RESPONSIVE:
      return {
        ...state,
        responsive: action.responsive,
        active: action.responsive ? state.manual_active : false,
      };
    case ActionTypes.NAV_ACTIVE:
      return {
        ...state,
        manual_active: action.active,
        active: action.active,
      };
    default:
      return state;
  }
}
