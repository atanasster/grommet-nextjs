export const guide = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { phone: '3047245566' }
  }
  render() {
    const { phone } = this.state;
    return (  
      <MaskedInput
        mask={['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
        guide={false}
        value={phone}
        onChange={({ target: { value } }) => this.setState({ phone: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
