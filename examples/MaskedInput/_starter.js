// eslint-disable-next-line no-underscore-dangle
export const _starter = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { phone: '3047245566' }
  }
  render() {
    const { phone } = this.state;
    return (  
      <MaskedInput
        placeholderChar='_'
        mask={['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
        placeholder='US Phone'
        value={phone}
        onChange={({ target: { value } }) => this.setState({ phone: value })}
        showMask={false}
      />
    );
  }
}         

render(<Demo />);  
`;
