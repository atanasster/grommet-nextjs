export const a11yIncrement = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { number: 12345 }
  }
  render() {
    const { number } = this.state;
    return (  
      <NumberInput
        value={number}
        a11yIncrement='Add to entry'
        step={10}
        a11yDecrement='Remove from entry'
        thousandsSeparatorSymbol=','
        onChange={({ target: { value } }) => this.setState({ number: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
