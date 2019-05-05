export const disabledDates = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { date: smallDate(new Date()) }
  }
  render() {
    const { date } = this.state;
    const today = new Date();
    const yesterday = (new Date()).setDate(today.getDate() - 1);
    
    return (  
      <DateInput
        value={date}
        disabledDates={[
          smallDate(yesterday),
          smallDate(today),
        ]}
        onChange={({ target: { value } }) => this.setState({ date: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
