// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Form onSubmit={values => alert(JSON.stringify(values))} pad={{ horizontal: 'small' }} >
    <DateInputField
      name='date'
      label='Date'
      validation={[validators.required()]}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
