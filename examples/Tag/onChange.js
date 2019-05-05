export const onChange = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { iconIndex: 0 };
  }
  onToggle() {
    this.setState({ iconIndex: 1 - this.state.iconIndex });
  };
  render() {
    const { iconIndex } = this.state;
    const tagIcons = [<Icons.Github />, <Icons.Grommet />];
    return (
      <Box align='start'>
        <Tag
          icon={tagIcons[iconIndex]}
          onChange={this.onToggle.bind(this)}
        />
      </Box>  
    );
  }
}    

render(<Demo />);  
`;
