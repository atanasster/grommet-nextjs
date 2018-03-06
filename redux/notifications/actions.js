import * as ActionTypes from './constants';

let notificationId = 0;

function delay(ms) {
  return new Promise(((resolve) => {
    setTimeout(resolve, ms); // (A)
  }));
}

export const deleteNotification = id => ({ type: ActionTypes.REMOVE_NOTIFICATION, id });

export function addStatus(message, status) {
  return (dispatch) => {
    notificationId += 1;
    const id = notificationId;
    dispatch({
      type: ActionTypes.ADD_NOTIFICATION,
      notification: { id, message, status },
    });
    delay(5000).then(() => dispatch(deleteNotification(id)));
  };
}

export function addError(message) {
  return addStatus(message, 'critical');
}


export function addWarning(message) {
  return addStatus(message, 'warning');
}

export function addRegularMessage(message) {
  return addStatus(message, 'normal');
}

export function addSuccessMessage(message) {
  return addStatus(message, 'ok');
}
