export const validation = `const Demo = () => (
  <Form onSubmit={values => alert(JSON.stringify(values))} pad={{ horizontal: 'small' }} >
    <SelectField
      label='Country'
      name='country'
      options={['USA', 'England', 'France']}
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
