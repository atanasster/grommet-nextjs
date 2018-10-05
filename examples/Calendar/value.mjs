export const value = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { date: (new Date()).toISOString() };
  }
  render() {
    const { date } = this.state;
    return (
      <Calendar
        date={date}
        onSelect={nextDate => this.setState({ date: nextDate })}
      />
    );
  }
}         

render(<Demo />);
`;
