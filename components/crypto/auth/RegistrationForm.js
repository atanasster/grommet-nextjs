import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';
import { Box, Text, Anchor, Button } from 'grommet';
import { Form } from 'grommet-controls';
import { TextInputField, PasswordInputField, EmailInputField } from 'grommet-controls/components/Form/Fields';
import validators from 'grommet-controls/components/Form/validators';
import connect from '../../../redux';
import { signIn } from '../../../redux/auth/actions';
import { addError, addSuccessMessage } from '../../../redux/notifications/actions';
import RegistrationMutation from './graphql/Register.graphql';


class RegistrationForm extends Component {
  getServerErrors(err) {
    if (err.graphQLErrors || err.networkError) {
      const message = err.graphQLErrors.length ?
        err.graphQLErrors[0].message : err.networkError.result.errors[0].message;
      this.props.addError(message);
    }
  }

  onSubmitRegister = ({ username, email, password }) => {
    this.props.mutate({
      variables: { input: { username, email, password } },
    })
      .then((response) => {
        if (response.data && response.data.register.user) {
          this.props.addSuccessMessage('Please check your email for a registration confirmation.');
          if (this.props.onClose) {
            this.props.onClose();
          }
        }
      })
      .catch((err) => {
        this.getServerErrors(err);
      });
  };
  render() {
    const { onSwitchLogin } = this.props;
    return (
      <Box gap='small' overflow='scroll'>
        <Text color='status-disabled' size='small'>
          Already have an account? <Anchor label='log in' onClick={onSwitchLogin} />
        </Text>
        <Box border='top' pad={{ vertical: 'small' }}>
          <Text>Or with an email and password:</Text>
          <Form onSubmit={this.onSubmitRegister} basis='medium'>
            <TextInputField label='User name' name='username' validation={[validators.required()]} />
            <EmailInputField label='Email' name='email' validation={[validators.required(), validators.email()]} />
            <PasswordInputField
              label='Password'
              name='password'
              validation={
                [validators.required(), validators.minLength(5), validators.alphaNumeric()]
              }
            />
            <PasswordInputField
              label='Confirm Password'
              name='password1'
              validation={[validators.equalsField('password')]}
            />

            <Box pad='small'>
              <Button type='submit' label='Register' />
            </Box>
          </Form>
        </Box>
      </Box>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ signIn, addError, addSuccessMessage }, dispatch);

export default graphql(RegistrationMutation)(connect(null, mapDispatchToProps)(RegistrationForm));
