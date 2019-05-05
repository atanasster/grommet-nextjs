export const validation = `const Demo = () => (
  <Form
    onSubmit={values => alert(JSON.stringify(values))}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <PasswordInputField
      label='Password'
      name='password'
      validation={[
        validators.required(),
        validators.minLength(8),
        validators.alphaNumeric(),
      ]}
    />
     <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
