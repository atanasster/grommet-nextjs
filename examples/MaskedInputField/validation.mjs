export const validation = `const Demo = () => (
  <Form onSubmit={values => alert(JSON.stringify(values))} pad={{ horizontal: 'small' }} >
    <MaskedInputField
      placeholderChar='_'
      mask={['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
      placeholder='US Phone'
      name='phone'
      label='Phone'
      validation={[
        validators.required(),
        validators.minLength(10),
      ]}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
