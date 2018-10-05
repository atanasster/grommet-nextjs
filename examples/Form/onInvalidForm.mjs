
export const onInvalidForm = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { invalid: undefined };
  }
  render() {
    const validState = {
      undefined: 'uninitialized',
      true: 'has errors',
      false: 'valid',
    }  
    const { invalid } = this.state;
    return (
      <Box pad='small' >
        <Form
          focusFirstChild={false}
          onSubmit={values => alert(JSON.stringify(values))}
          onInvalidForm={error => this.setState({ invalid: error })}
          basis='small'
        >
          <TextInputField label='Text' name='invalidfield' validation={[validators.required(), validators.minLength(8)]} />
        </Form>
        <Text size='small'>
          {validState[invalid]}
        </Text>
      </Box>
    );
  }
}    

render(<Demo />);  
`;
