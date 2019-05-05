export const searchPlaceholder = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { size: 'small' };
  }
  render() {
    const { size } = this.state;
    return (  
      <Select
        onSearch={() => {}}
        searchPlaceholder='Type something here'
        options={['small', 'medium', 'large', 'xlarge', 'huge']}
        value={size}
        onChange={({ option }) => this.setState({ size: option })}
      />
    );
  }
}

render(<Demo />);
`;
