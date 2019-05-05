// eslint-disable-next-line no-underscore-dangle,camelcase
export const ip_address = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };
  };

  onChange(event) {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    const IPv4ElementExp = /^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$/;
    return (
      <GrommetMaskedInput
        mask={[
          {
            length: [1, 3],
            regexp: IPv4ElementExp,
            placeholder: "xxx"
          },
          { fixed: "." },
          {
            length: [1, 3],
            regexp: IPv4ElementExp,
            placeholder: "xxx"
          },
          { fixed: "." },
          {
            length: [1, 3],
            regexp: IPv4ElementExp,
            placeholder: "xxx"
          },
          { fixed: "." },
          {
            length: [1, 3],
            regexp: IPv4ElementExp,
            placeholder: "xxx"
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
