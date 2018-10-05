export const onSubmit = `const Demo = () => (
  <Form focusFirstChild={false} onSubmit={values => alert(JSON.stringify(values))} basis='small'>
    <TextInputField label='Text' name='fieldname' />
  </Form>
);

render(<Demo />);  
`;
