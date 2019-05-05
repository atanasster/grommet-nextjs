export const max = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { number: 4 }
  }
  render() {
    const { number } = this.state;
    return (  
      <NumberInput
        value={number}
        max={5}
        onChange={({ target: { value } }) => this.setState({ number: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
