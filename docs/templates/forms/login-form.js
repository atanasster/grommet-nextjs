/*
import React from 'react';
import { Box, Text, RoutedAnchor } from 'grommet';
import { Form ,PasswordInputField, EmailInputField, CheckBoxField, validators } from 'grommet-controls';
*/

const LoginForm = (props) => (
  <Form
    basis='medium'
    focusFirstChild={false}
    onSubmit={f => alert(JSON.stringify(f))}
    {...props}
  >
    <EmailInputField
      label='Email'
      name='email'
      validation={[validators.required(), validators.email()]}
    />
    <PasswordInputField
      label={(
        <Box direction='row' align='center' justify='between'>
          Password
          <RoutedAnchor path='/reset_password' size='small' label='Forgot password?' />
        </Box>
      )}
      description='Password'
      name='password'
      validation={
        [validators.required(), validators.minLength(5), validators.alphaNumeric()]
      }
    />
    <CheckBoxField
      label='Remember me'
      name='rememberme'
      inField={false}
    />
    <Box pad={{ vertical: 'medium' }} align='end'>
      <Button hoverIndicator='background' primary={true} type='submit' label='Save profile' />
    </Box>
    <Box direction='row' alignSelf='center' gap='small' align='center'>
      <Text>
        {'Don\'t have an account yet?'}
      </Text>
      <RoutedAnchor path='/register' label='Sign up' />
    </Box>
  </Form>
);

const Demo = () => (
  <LoginForm />
);

render(<Demo />);
