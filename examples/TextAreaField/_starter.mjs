// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Form onSubmit={values => alert(JSON.stringify(values))} pad={{ horizontal: 'small' }} >
    <TextAreaField
      rows='6'
      label='Short bio'
      name='bio'
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
