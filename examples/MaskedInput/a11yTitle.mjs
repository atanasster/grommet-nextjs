export const a11yTitle = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { number: 18933 }
  }
  render() {
    const { number } = this.state;
    return (  
      <MaskedInput
        a11yTitle='Dollars'
        mask={MaskedInput.createNumberMask()}
        value={number}
        onChange={({ target: { value } }) => this.setState({ number: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
