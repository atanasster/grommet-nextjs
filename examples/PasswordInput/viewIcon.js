export const viewIcon = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { password: 'password' }
  }
  render() {
    const { password } = this.state;
    return (  
      <PasswordInput
        viewIcon={<Icons.Unlock />}
        hideIcon={<Icons.Lock />}
        a11yTitle='enter password'
        value={password}
        onChange={({ target: { value } }) => this.setState({ password: value })}
      />
    );
  }
}         

render(<Demo />);  
`;
