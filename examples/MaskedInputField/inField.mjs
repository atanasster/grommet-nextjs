export const inField = `const Demo = () => (
  <Form
    onSubmit={values => alert(JSON.stringify(values))}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <MaskedInputField
      placeholderChar='_'
      mask={['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
      placeholder='US Phone'
      name='phone'
      label='Phone'
      inField={false}
      validation={[validators.required()]}
    />

    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
