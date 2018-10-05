// eslint-disable-next-line no-underscore-dangle
export const _starter = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { number: 12345 }
  }
  render() {
    const { number } = this.state;
    return (  
      <NumberInput
        value={number}
        thousandsSeparatorSymbol=','
        onChange={({ target: { value } }) => this.setState({ number: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
