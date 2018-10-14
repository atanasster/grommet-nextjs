export const validation = `const Demo = () => (
  <Form onSubmit={values => alert(JSON.stringify(values))} pad={{ horizontal: 'small' }} >
    <TextInputField
      label='Zip code'
      name='zip_code'
      validation={[
        validators.required(),
        validators.numeric(),
        validators.minLength(5)
      ]}
    />
     <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
