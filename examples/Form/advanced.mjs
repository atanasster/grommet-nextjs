export const advanced = `const Demo = () => (
  <Form onSubmit={values => alert(JSON.stringify(values))} pad={{ horizontal: 'small' }} >
    <PasswordInputField label='Password' name='password' validation={[validators.required(), validators.minLength(8), validators.alphaNumeric()]} />
    <PasswordInputField label='Confirm Password' name='password1' validation={[validators.equalsField('password', 'the above password')]} />
    <TextInputField label='URL' name='url' validation={[validators.required(), validators.url()]} />
    <SelectField name='gender' options={['male', 'female']} validation={[validators.required()]} />
    <CheckBoxField name='tos' label='Terms of service' validation={[validators.required(), validators.True('Please accept the TOS')]} />
    <NumberInputField min={6} max={22} name='age' label='Age' validation={[validators.required(), validators.numeric(), validators.bigger(10), validators.smallerOrEqual(18)]} />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
