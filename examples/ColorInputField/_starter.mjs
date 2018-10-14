// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Form onSubmit={values => alert(JSON.stringify(values))} pad={{ horizontal: 'small' }} >
    <ColorInputField
      name='color'
      colors={uiColors}
      label='Color'
      validation={[validators.required()]}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;
