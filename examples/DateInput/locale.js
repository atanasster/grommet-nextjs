export const locale = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { date: smallDate(new Date()) }
  }
  render() {
    const { date } = this.state;
    return (  
      <DateInput
        value={date}
        locale='de-DE'
        onChange={({ target: { value } }) => this.setState({ date: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
