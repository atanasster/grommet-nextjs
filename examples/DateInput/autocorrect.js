export const autocorrect = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { date: smallDate(new Date()) }
  }
  render() {
    const { date } = this.state;
    return (  
      <DateInput
        autocorrect={true}
        value={date}
        onChange={({ target: { value } }) => this.setState({ date: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
