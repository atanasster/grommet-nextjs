export const value = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }
  render() {
    const { value } = this.state;
    return (
      <RangeInput
        value={value}
        onChange={event => this.setState({ value: event.target.value })}
      />
    );
  }
}      

render(<Demo />);
`;
