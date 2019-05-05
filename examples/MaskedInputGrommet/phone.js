// eslint-disable-next-line no-underscore-dangle
export const phone = `class Demo extends React.Component {
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
          { fixed: "(" },
          {
            length: 3,
            regexp: /^[0-9]{1,3}$/,
            placeholder: "xxx"
          },
          { fixed: ")" },
          { fixed: " " },
          {
            length: 3,
            regexp: /^[0-9]{1,3}$/,
            placeholder: "xxx"
          },
          { fixed: "-" },
          {
            length: 4,
            regexp: /^[0-9]{1,4}$/,
            placeholder: "xxxx"
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
