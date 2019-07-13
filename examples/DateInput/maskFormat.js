
export const maskFormat = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { date: smallDate(new Date(), 'es-ES') }
  }
  render() {
    const { date } = this.state;
    return (  
      <DateInput
        value={date}
        maskFormat='dd mm yyyy'
        locale='es-ES'
        onChange={({ target: { value } }) => this.setState({ date: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
