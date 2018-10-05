export const size = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { date: smallDate(new Date()) }
  }
  render() {
    const { date } = this.state;
    return (
      <Box gap='small'>
      {['small', 'medium', 'large'].map(size => (
        <DateInput
          key={size}
          value={date}
          size={size}
          onChange={({ target: { value } }) => this.setState({ date: value })}
        />
      ))}    
      </Box>  
    );
  }
}         

render(<Demo />);  
`;
