export const onClick = `class Demo extends React.Component {
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
        onClick={(e, option) => alert('Clicked on ' + option)}
      />
    );
  }
}    

render(<Demo />);  
`;
