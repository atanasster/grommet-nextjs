export const value = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { value: 'A B C' };
  }
  render() {
    const { value } = this.state;
    return (
      <TextArea
        value={value}
        onChange={({ target: { value }}) => this.setState({ value })}
      />
    );
  }
}

render(<Demo />); 
`;
