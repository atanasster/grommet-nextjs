export const dropContent = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { date: smallDate(new Date()) };
  }  
  render() {
    const { date } = this.state;
    return (
      <DropInput
        a11yDropTitle='Open calendar'
        mask={[/\\d/, /\\d/, '/', /\\d/, /\\d/, '/', /\\d/, /\\d/, /\\d/, /\\d/]}
        dropContent={(
          <Box pad='small'>
            <Calendar size='small' date={date} onSelect={isoDate => this.setState({ date: smallDate(new Date(isoDate)) })} />
          </Box>
        )}
        value={date}
        onChange={({ target: { value } }) => this.setState({ date: value })}
      />
    );
  }
} 

render(<Demo />);  
`;
