export const widgets = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { number: '10' };
  }  
  render() {
    const { number } = this.state;
    return (
      <DropInput
        value={number}
        onChange={({ target: { value } }) => this.setState({ number: parseFloat(value) })}
        widgets={[
          { icon: <Icons.Add />, onClick: () => this.setState({ number: number + 1 }) },
          { icon: <Icons.Subtract />, onClick: () => this.setState({ number: number - 1 }) },
        ]}
      />
    );
  }
} 

render(<Demo />);  
`;
