// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Form focusFirstChild={false} onSubmit={values => alert(JSON.stringify(values))}>
    <TextInputField label='Text' name='text' validation={[validators.required(), validators.minLength(8)]} />
  </Form>
);

render(<Demo />);  
`;
