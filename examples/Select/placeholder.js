export const placeholder = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { size: undefined };
  }
  render() {
    const { size } = this.state;
    return (  
      <Select
        placeholder='Choose one'
        options={['small', 'medium', 'large', 'xlarge', 'huge']}
        value={size}
        onChange={({ option }) => this.setState({ size: option })}
      />
    );
  }
}  

render(<Demo />);    
`;
