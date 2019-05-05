export const onSubmitError = `const Demo = () => (
  <Form
    focusFirstChild={false}
    onSubmit={values => alert(JSON.stringify(values))}
    onSubmitError={errors => alert(JSON.stringify(errors))}
    basis='small'
  >
    <TextInputField label='Text' name='errofield' validation={[validators.required(), validators.minLength(8)]} />
  </Form>
);

render(<Demo />);  
`;
