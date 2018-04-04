import React, { Component } from 'react';
import { Box, Heading } from 'grommet';
import connect from '../../../redux';

class UserProfile extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <Box gap='small'>
        <Heading margin='none' >
          {` Hi ${user.username},`}
        </Heading>
        <Heading margin='none' level={3}>
          {` your registered email is ${user.email}`}
        </Heading>
      </Box>
    );
  }
}


const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(UserProfile);
