export const validation = `const Demo = () => (
  <Form onSubmit={values => alert(JSON.stringify(values))} pad={{ horizontal: 'small' }} >
    <NumberInputField
      min={6}
      max={22}
      name='age'
      label='Age'
      validation={[
        validators.required(),
        validators.numeric(),
        validators.bigger(10),
        validators.smallerOrEqual(18)
      ]}
    />
     <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
