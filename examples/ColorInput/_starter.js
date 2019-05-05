// eslint-disable-next-line no-underscore-dangle
export const _starter = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { color: '#ff0000'  }
  }
  render() {
    const { color } = this.state;
    return (  
      <ColorInput
        colors={materialColors}
        value={color}
        onChange={({ target: { value } }) => this.setState({ color: value })}
      />
  );
  }
}         

render(<Demo />);  
`;
