export const bounds = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { date: smallDate(new Date()) }
  }
  render() {
    const { date } = this.state;
    return (  
      <DateInput
        value={date}
        bounds={[
          smallDate(new Date(new Date().getFullYear(), 0, 1)),
          smallDate(new Date(new Date().getFullYear(), 11, 31)),
        ]}
        onChange={({ target: { value } }) => this.setState({ date: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
