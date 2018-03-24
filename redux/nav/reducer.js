import * as ActionTypes from './constants';

// noinspection JSAnnotator
const initialState = {
  responsive: false,
  active: false,
  manual_active: false,
  items: [
    { route: 'markets', label: 'markets', a11yTitle: 'Market cap table of crypto coins' },
    { route: 'markets_distribution', label: 'distribution', a11yTitle: 'Market cap distribution of crypto coins' },
    { route: 'exchanges', label: 'exchanges', a11yTitle: 'List of exchanges' },
    { route: 'coins_list', label: 'coins', a11yTitle: 'List of coins' },
    { route: 'coins_icos', label: 'ICOs', a11yTitle: 'List of active and upcoming initial coin offerings' },
    {
      route: 'coin_info',
      params: { symbol: 'BTC' },
      label: 'bitcoin',
      a11yTitle: 'Information about BitCoin',
    },
    {
      route: 'coin_info',
      params: { symbol: 'ETH' },
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
