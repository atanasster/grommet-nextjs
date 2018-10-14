export const inField = `const Demo = () => (
  <Form
    onSubmit={values => alert(JSON.stringify(values))}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <TextAreaField
      rows='6'
      label='Short bio'
      name='bio'
      inField={false}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
