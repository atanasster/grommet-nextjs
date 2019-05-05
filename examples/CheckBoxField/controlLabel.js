export const controlLabel = `const Demo = () => (
  <Form
    onSubmit={values => alert(JSON.stringify(values))}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <CheckBoxField
      name='tos'
      controlLabel={<Text weight='bold'>Terms of service</Text>}
      label='Terms of service'
      validation={[validators.required(), validators.True('Please accept the TOS')]}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
