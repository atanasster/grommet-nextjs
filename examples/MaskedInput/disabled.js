export const disabled = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { date: smallDate(new Date()) }
  }
  render() {
    const { date } = this.state;
    return (  
      <MaskedInput
        mask={[/\\d/, /\\d/, '/', /\\d/, /\\d/, '/', /\\d/, /\\d/, /\\d/, /\\d/]}
        disabled={true}
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
