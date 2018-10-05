export const integers = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { number: 9999 }
  }
  render() {
    const { number } = this.state;
    return (  
      <NumberInput
        value={number}
        integers={4}
        onChange={({ target: { value } }) => this.setState({ number: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
