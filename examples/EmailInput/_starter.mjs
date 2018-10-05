// eslint-disable-next-line no-underscore-dangle
export const _starter = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { email: 'john.smith@gmail.co.uk' }
  }
  render() {
    const { email } = this.state;
    return (  
      <EmailInput
        value={email}
        onChange={({ target: { value } }) => this.setState({ email: value })}
      />
  );
  }
}         

render(<Demo />);  
`;
