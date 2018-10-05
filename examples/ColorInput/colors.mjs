export const colors = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { color: '#ff0000'  }
  }
  render() {
    const { color } = this.state;
    return (  
      <ColorInput
        value={color}
        columns={9}
        wrap={true}
        onChange={({ target: { value } }) => this.setState({ color: value })}
        colors={uiColors}
      />
  );
  }
}         

render(<Demo />);  
`;
