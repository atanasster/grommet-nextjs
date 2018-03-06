import * as ActionTypes from './constants';

export const navActivate = active => (
  { type: ActionTypes.NAV_ACTIVE, active }
);


export const updateResponsive = responsive => (
  { type: ActionTypes.UPDATE_RESPONSIVE, responsive }
);
