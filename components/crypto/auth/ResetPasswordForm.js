import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';
import { Box, Button } from 'grommet';
import { Form } from 'grommet-controls';
import { PasswordInputField } from 'grommet-controls/components/Form/Fields';
import validators from 'grommet-controls/components/Form/validators';
import connect from '../../../redux';
import { addError, addSuccessMessage } from '../../../redux/notifications/actions';
import ResetPasswordMutation from './graphql/ResetPassword.graphql';
import routerPush from '../Router';


class ResetPasswordForm extends Component {
  getServerErrors(err) {
    if (err.graphQLErrors || err.networkError) {
      const message = err.graphQLErrors.length ?
        err.graphQLErrors[0].message : err.networkError.result.errors[0].message;
      this.props.addError(message);
    }
  }


  onSubmitRegister = ({ password, passwordConfirmation }) => {
    const { token } = this.props;
    this.props.mutate({
      variables: { input: { password, passwordConfirmation, token } },
    })
      .then((response) => {
        if (response.data && response.data.resetPassword.ok) {
          this.props.addSuccessMessage('The password was successfully changed.');
          routerPush({ route: 'login' });
        }
      })
      .catch((err) => {
        this.getServerErrors(err);
      });
  };
  render() {
    return (
      <Box pad={{ vertical: 'small' }}>
        <Form onSubmit={this.onSubmitRegister} basis='medium'>
          <PasswordInputField
            label='Password'
            name='password'
            validation={
              [validators.required(), validators.minLength(5), validators.alphaNumeric()]
            }
          />
          <PasswordInputField
            label='Confirm Password'
            name='passwordConfirmation'
            validation={[validators.equalsField('password')]}
          />

          <Box pad='small'>
            <Button type='submit' label='Submit' />
          </Box>
        </Form>
      </Box>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addError, addSuccessMessage }, dispatch);

export default graphql(ResetPasswordMutation)(connect(null, mapDispatchToProps)(ResetPasswordForm));
