/*
import React from 'react';
import { Box, Text, RoutedAnchor } from 'grommet';
import { Form, TextInputField, PasswordInputField, EmailInputField, CheckBoxField, validators } from 'grommet-controls';
*/

const RegisterForm = (props) => (
  <Form
    basis='medium'
    focusFirstChild={false}
    onSubmit={f => alert(JSON.stringify(f))}
    {...props}
  >
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
    <CheckBoxField
      controlLabel={(
        <Box direction='row' gap='xsmall' align='center'>
          Agree to
          <RoutedAnchor path='/terms_of_service' label='terms of service' />
        </Box>
      )}
      description='Terms of service'
      name='accept_tos'
      validation={[validators.required(), validators.True('Please accept our TOS')]}
    />
    <Box pad={{ vertical: 'medium' }} align='end'>
      <Button hoverIndicator='background' primary={true} type='submit' label='Save profile' />
    </Box>
    <Box direction='row' alignSelf='center' gap='small' align='center'>
      <Text>
        {'Already have an account?'}
      </Text>
      <RoutedAnchor path='/login' label='Sign in' />
    </Box>
  </Form>
);

const Demo = () => (
  <RegisterForm />
);

render(<Demo />);
