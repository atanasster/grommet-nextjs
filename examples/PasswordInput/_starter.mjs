// eslint-disable-next-line no-underscore-dangle
export const _starter = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { password: 'password' }
  }
  render() {
    const { password } = this.state;
    return (  
      <PasswordInput
        value={password}
        onChange={({ target: { value } }) => this.setState({ password: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
