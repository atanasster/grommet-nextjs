export const focusIndicator = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { phone: '3047245566' }
  }
  render() {
    const { phone } = this.state;
    return (  
      <MaskedInput
        mask={['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
        plain={true}
        focusIndicator={true}
        value={phone}
        onChange={({ target: { value } }) => this.setState({ phone: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
