import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { Notification } from 'grommet-controls';
import { deleteNotification } from '../../redux/notifications/actions';
import connect from '../../redux/index';

const NotificationsContainer = ({ notifications, onDeleteNotification }) => {
  if (!notifications || !notifications.length) {
    return null;
  }
  const notificationList = notifications.map((notification) => {
    const { message, status, id } = notification;
    return (
      <Notification
        key={`notification_${id}`}
        message={message}
        status={status}
        onClose={() => onDeleteNotification(id)}
      />
    );
  });
  return (
    <Fragment>
      {notificationList}
    </Fragment>
  );
};

const mapStateToProps = state => ({ notifications: state.notifications });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ onDeleteNotification: deleteNotification }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
