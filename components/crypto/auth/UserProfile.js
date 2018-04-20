import React, { Component } from 'react';
import { Heading, Anchor } from 'grommet';
import { ImageStamp, Card } from 'grommet-controls';
import { CardTitle, CardSubTitle, CardContent } from 'grommet-controls/components/Card';
import connect from '../../../redux';

class UserProfile extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <Card size={{ width: 'xlarge' }}>
        <CardTitle pad='none'>
          {user.picture && <ImageStamp src={user.picture} round='full' />}
          <Heading margin='small'>{user.username}</Heading>
        </CardTitle>
        <CardSubTitle border='bottom'>
          {user.email}
        </CardSubTitle>
        <CardContent>
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
        </CardContent>
      </Card>
    );
  }
}


const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(UserProfile);
