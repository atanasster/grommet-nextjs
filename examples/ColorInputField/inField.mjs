export const inField = `const Demo = () => (
  <Form
    onSubmit={values => alert(JSON.stringify(values))}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <ColorInputField
      name='colors'
      inField={false}
      label='Color'
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
