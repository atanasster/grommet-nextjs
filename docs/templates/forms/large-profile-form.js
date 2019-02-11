/*
import React from 'react';
import { Box, Button } from 'grommet';
import { Form, TextInputField, EmailInputField, TextAreaField, SelectField, validators } from 'grommet-controls';
*/

const LargeProfileForm = ({ object }) => (
  <Form
    object={object}
    basis='large'
    focusFirstChild={false}
    onSubmit={f => alert(JSON.stringify(f))}
  >
    <Box direction='row' gap='medium'>
      <Box basis='1/3'>
        <TextInputField label='Company' name='company' />
      </Box>
      <Box basis='1/3'>
        <TextInputField label='User name' name='username' validation={[validators.required()]} />
      </Box>
      <Box basis='1/3'>
        <EmailInputField label='Email' name='email' validation={[validators.required(), validators.email()]} />
      </Box>
    </Box>
    <Box direction='row' gap='medium'>
      <Box basis='1/2'>
        <TextInputField label='First name' name='first_name' />
      </Box>
      <Box basis='1/2'>
        <TextInputField label='Last name' name='last_name' />
      </Box>
    </Box>
    <TextInputField label='Address' name='address' />
    <Box direction='row' gap='medium'>
      <Box basis='1/3'>
        <TextInputField label='City' name='city' validation={[validators.required()]} />
      </Box>
      <Box basis='1/3'>
        <TextInputField
          label='Zip code'
          name='zip_code'
          validation={[validators.required(), validators.numeric(), validators.minLength(5)]}
        />
      </Box>
      <Box basis='1/3'>
        <SelectField
          label='Country'
          name='country'
          options={['USA', 'England', 'France']}
          validation={[validators.required()]}
        />
      </Box>
    </Box>
    <TextAreaField rows='6' label='Short bio' name='bio' />
    <Box pad={{ vertical: 'medium' }} align='end'>
      <Button hoverIndicator='background' primary={true} type='submit' label='Save profile' />
    </Box>
  </Form>
);

const Demo = () => (
  <LargeProfileForm
    object={{
      company: 'Assassins inc.',
      username: 'jwick',
      email: 'jwick@assasins.com',
      first_name: 'John',
      last_name: 'Wick',
      address: '4066 Sunflower str',
      city: 'Cupertino',
      zip_code: '95350',
      country: 'USA',
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
