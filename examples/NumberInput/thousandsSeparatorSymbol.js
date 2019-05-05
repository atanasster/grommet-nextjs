export const thousandsSeparatorSymbol = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { number: '1000,00' }
  }
  render() {
    const { number } = this.state;
    return (  
      <NumberInput
        value={number}
        thousandsSeparatorSymbol=' '
        decimalSymbol=','
        updateToString={true}
        onChange={({ target: { value } }) => this.setState({ number: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
