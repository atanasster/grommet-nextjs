export const object = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { data: undefined };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;

    fetch(
      \`https://jsonplaceholder.typicode.com/posts?title=qui%20est%20esse\`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Could not return Report Subscription by Id.");
        }
      })
      .then(data => {
        if (this._isMounted) {
          this.setState({ data: data[0] });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {
    const { data } = this.state;
    return (
      <Form
        object={data}
        onSubmit={values => alert(JSON.stringify(values))}
        onChange={this.handleChange}
        pad={{ horizontal: "small" }}
        focusFirstChild={false}
      >
        <TextInputField
         label="Title"
         name="title"
         validation={[validators.required(), validators.alphaNumeric()]}
        />
        <TextInputField label="Body" name="body" />
        <Box pad='small'>
          <Button type='submit' label='Submit' />
        </Box>
      </Form>
    );
  }
}  
render(<Demo />);  
`;
