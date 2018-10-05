export const suffix = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { number: 6 }
  }
  render() {
    const { number } = this.state;
    return (  
      <NumberInput
        value={number}
        suffix=' USD'
        onChange={({ target: { value } }) => this.setState({ number: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
