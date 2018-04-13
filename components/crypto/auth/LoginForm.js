import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';
import { Box, Text, Anchor, Button } from 'grommet';
import { Form } from 'grommet-controls';
import { PasswordInputField, EmailInputField } from 'grommet-controls/components/Form/Fields';
import validators from 'grommet-controls/components/Form/validators';
import { Facebook, Google, Linkedin, Github } from 'grommet-icons';
import connect from '../../../redux';
import routerPush from '../Router';
import { addError } from '../../../redux/notifications/actions';
import { signIn } from '../../../redux/auth/actions';
import popupWindow from './openWindow';
import loginMutation from './graphql/Login.graphql';

class LoginForm extends Component {
  // eslint-disable-next-line no-unused-vars
  openOAutPopup = (provider) => {
    popupWindow(`/auth/${provider}`)
      .then((data) => {
        this.props.signIn(data);
        routerPush({ route: 'profile' });
      })
      .catch(err => console.log('error', err));
  };

  getServerErrors(err) {
    if (err.graphQLErrors || err.networkError) {
      const message = err.graphQLErrors.length ?
        err.graphQLErrors[0].message : err.networkError.result.errors[0].message;
      this.props.addError(message);
    }
  }

  onSubmitLogin = ({ email, password }) => {
    this.props.mutate({
      variables: { input: { email, password } },
    })
      .then((response) => {
        if (response.data) {
          this.props.signIn(response.data.login);
          routerPush({ route: 'profile' });
        }
      })
      .catch((err) => {
        this.getServerErrors(err);
      });
  };


  render() {
    const { onSwitchNewAccount, onSwitchRecoverPassword } = this.props;
    return (
      <Box gap='small' overflow='scroll'>
        <Box direction='row'>
          <Text color='status-disabled' size='small'>
            New user? Signup for a <Anchor label='free account' onClick={onSwitchNewAccount} />
          </Text>
        </Box>
        <Box pad={{ vertical: 'small' }}>
          <Text margin='none'>Signup with one of your social accounts:</Text>
          <Box direction='row' pad='small' justify='between'>
            <Box size='small'>
              <Anchor
                icon={<Facebook color='plain' />}
                label='Facebook'
                onClick={() => this.openOAutPopup('facebook')}
              />
            </Box>
            <Box size='small'>
              <Anchor
                icon={<Github color='plain' />}
                label='Github'
                onClick={() => this.openOAutPopup('github')}
              />
            </Box>
          </Box>
          <Box direction='row' pad='small' justify='between'>
            <Box size='small'>
              <Anchor
                icon={<Linkedin color='plain' />}
                label='LinkedIn'
                onClick={() => this.openOAutPopup('linkedin')}
              />
            </Box>
            <Box size='small'>
              <Anchor
                icon={<Google color='plain' />}
                label='Google'
                onClick={() => this.openOAutPopup('google')}
              />
            </Box>
          </Box>
        </Box>
        <Box border='top' pad={{ vertical: 'small' }}>
          <Text>Or with an email and password:</Text>
          <Form onSubmit={this.onSubmitLogin} basis='medium'>
            <EmailInputField label='Email' name='email' validation={[validators.required(), validators.email()]} />
            <PasswordInputField
              label='Password'
              name='password'
              validation={
                [validators.required(), validators.minLength(5), validators.alphaNumeric()]
              }
            />
            <Box pad='small'>
              <Button type='submit' label='Log in' />
            </Box>
          </Form>
        </Box>
        <Text color='status-disabled' size='small'>
          <Anchor label='forgot password?' onClick={onSwitchRecoverPassword} />
        </Text>
      </Box>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addError, signIn }, dispatch);


export default graphql(loginMutation)(connect(null, mapDispatchToProps)(LoginForm));
