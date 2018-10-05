export const value = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { size: 'small' };
  }
  render() {
    const { size } = this.state;
    return (  
      <Select
        options={['small', 'medium', 'large', 'xlarge', 'huge']}
        value={size}
        onChange={({ option }) => this.setState({ size: option })}
      />
    );
  }
}

render(<Demo />);  
`;
