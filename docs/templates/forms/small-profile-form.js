/*
import React from 'react';
import { Box, Button } from 'grommet';
import { Form, ImageStamp, TextInputField, EmailInputField, TextAreaField, PasswordInputField, validators } from 'grommet-controls';
*/

const LargeProfileForm = ({ object }) => (
  <Form
    object={object}
    basis='medium'
    focusFirstChild={false}
    onSubmit={f => alert(JSON.stringify(f))}
  >
    <Box direction='row' gap='large' align='center'>
      <Box>
        <ImageStamp
          src='https://picsum.photos/g/200/200?image=95'
          round='full'
          size='large'
        />
      </Box>
      <Box fill='horizontal'>
        <TextInputField label='User name' name='username' validation={[validators.required()]} />
      </Box>
    </Box>
    <TextAreaField rows='6' label='Short bio' name='bio' />
    <EmailInputField label='Email' name='email' validation={[validators.required(), validators.email()]} />
    <PasswordInputField
      label='Password'
      name='password'
      validation={
        [validators.required(), validators.minLength(5), validators.alphaNumeric()]
      }
    />
    <Box pad={{ vertical: 'medium' }} align='end'>
      <Button hoverIndicator='background' primary={true} type='submit' label='Save profile' />
    </Box>
  </Form>
);

const Demo = () => (
  <LargeProfileForm
    object={{
      username: 'jwick',
      email: 'jwick@assasins.com',
      bio: `
Legendary assassin retired from his violent career after marrying the love of his life.
Her sudden death leaves John in deep mourning and when sadistic mobster Iosef Tarasov and his thugs
steal John's prized car and kill the puppy that was a last gift from his wife,
John unleashes the remorseless killing machine within and seeks vengeance.
      `,
    }}
  />
);

render(<Demo />);
