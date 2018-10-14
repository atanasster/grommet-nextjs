export const validation = `const Demo = () => (
  <Form onSubmit={values => alert(JSON.stringify(values))} pad={{ horizontal: 'small' }} >
    <TextAreaField
      rows='6'
      label='Short bio'
      name='bio'
      inField={false}
      validation={[
        validators.required(),
      ]}
    />
     <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
