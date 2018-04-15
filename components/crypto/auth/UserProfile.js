import React, { Component } from 'react';
import { Box, Heading, Anchor } from 'grommet';
import { ImageStamp } from 'grommet-controls';
import connect from '../../../redux';
import Card from '../Card';

class UserProfile extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    console.log(user);
    return (
      <Card
        title={(
          <Box direction='row' gap='small' align='center'>
            {user.picture && <ImageStamp src={user.picture} round='full' />}
            <Heading margin='small'>{user.username}</Heading>
          </Box>
        )}
        subTitle={user.email}
        basis='medium'
        size='large'
      >
        <table>
          <tbody>
            <tr>
              <td>Facebook</td>
              <td>{user.facebook_id && <Anchor href={user.facebook_url} target='_blank'>{user.facebook_name}</Anchor>}</td>
            </tr>
            <tr>
              <td>Google</td>
              <td>{user.google_id && <Anchor href={user.google_url} target='_blank'>{user.google_name}</Anchor>}</td>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <td>{user.linkedin_id && <Anchor href={user.linkedin_url} target='_blank'>{user.linkedin_name}</Anchor>}</td>
            </tr>
            <tr>
              <td>Github</td>
              <td>{user.github_id && <Anchor href={user.github_url} target='_blank'>{user.github_name}</Anchor>}</td>
            </tr>

          </tbody>
        </table>
      </Card>
    );
  }
}


const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(UserProfile);
