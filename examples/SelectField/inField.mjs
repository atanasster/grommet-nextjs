export const inField = `const Demo = () => (
  <Form
    onSubmit={values => alert(JSON.stringify(values))}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <SelectField
      label='Country'
      name='country'
      inField={false}
      options={['USA', 'England', 'France']}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
