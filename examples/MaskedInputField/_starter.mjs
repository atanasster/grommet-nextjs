// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Form onSubmit={values => alert(JSON.stringify(values))} pad={{ horizontal: 'small' }} >
    <MaskedInputField
      placeholderChar='_'
      mask={['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
      placeholder='US Phone'
      name='phone'
      label='Phone'
      validation={[validators.required()]}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
