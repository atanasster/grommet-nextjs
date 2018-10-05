export const direction = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { selected: ['one', 'five'] };
  }  
  render() {
    const { selected } = this.state;
    return (
      <Box align='start'>
        <Tags
          value={selected}
          onChange={({ value }) => this.setState({ selected: value })}
          direction='column'
        />
      </Box>  
    );
  }
}    

render(<Demo />);  
`;
