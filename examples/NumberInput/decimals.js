export const decimals = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { number: 3.5996 }
  }
  render() {
    const { number } = this.state;
    return (  
      <NumberInput
        value={number}
        decimals={4}
        step={0.5}
        onChange={({ target: { value } }) => this.setState({ number: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
