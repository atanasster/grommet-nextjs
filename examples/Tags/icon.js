export const icon = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { selected: ['one', 'five'] };
  }  
  render() {
    const { selected } = this.state;
    return (
      <Tags
        value={selected}
        onChange={({ value }) => this.setState({ selected: value })}
        icon={<Icons.FormSubtract />}
      />
    );
  }
}    

render(<Demo />);  
`;
