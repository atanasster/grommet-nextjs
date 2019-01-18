// eslint-disable-next-line no-underscore-dangle
export const email = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };
  };

  onChange(event) {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <GrommetMaskedInput
        mask={[
          {
            regexp: /^[\\w\\-_.]+$/,
            placeholder: "example"
          },
          { fixed: "@" },
          {
            regexp: /^[\\w]+$/,
            placeholder: "my"
          },
          { fixed: "." },
          {
            regexp: /^[\\w]+$/,
            placeholder: "com"
          }
        ]}
        value={value}
        onChange={this.onChange.bind(this)}
      />
    );
  }
}

render(<Demo />);  
`;
