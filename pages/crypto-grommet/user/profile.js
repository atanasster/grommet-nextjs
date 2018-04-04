import React from 'react';
import App from '../../../components/crypto/App';
import withData from '../../../apollo/withData';
import UserProfile from '../../../components/crypto/auth/UserProfile';

export default withData(() => (
  <App title='Profile'>
    <UserProfile />
  </App>
));
