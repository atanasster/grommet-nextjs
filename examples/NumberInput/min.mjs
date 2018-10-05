export const min = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { number: 6 }
  }
  render() {
    const { number } = this.state;
    return (  
      <NumberInput
        value={number}
        min={5}
        onChange={({ target: { value } }) => this.setState({ number: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
