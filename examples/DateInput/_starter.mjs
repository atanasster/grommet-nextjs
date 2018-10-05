// eslint-disable-next-line no-underscore-dangle
export const _starter = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { date: undefined }
  }
  render() {
    const { date } = this.state;
    return (  
      <DateInput
        defaultValue={date}
        placeholder='DD/MM/YYYY'
        onChange={({ target: { value } }) => alert(value)}
      />
    );
  }
}         

render(<Demo />);  
`;
