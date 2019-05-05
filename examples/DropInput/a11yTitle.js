export const a11yTitle = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { number: '10' };
  }  
  render() {
    const { number } = this.state;
    return (
      <DropInput
        a11yTitle='Birthdy date'
        value={number}
        onChange={({ target: { value } }) => this.setState({ number: value })}
      />
    );
  }
} 

render(<Demo />);  
`;
