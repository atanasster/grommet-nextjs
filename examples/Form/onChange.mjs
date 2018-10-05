export const onChange = `const Demo = () => (
  <Form
    focusFirstChild={false}
    onChange={({ target: { value } }) => console.log(value)}
    basis='small'
  >
    <TextInputField label='Text' name='onchange' />
  </Form>
);

render(<Demo />);  
`;
