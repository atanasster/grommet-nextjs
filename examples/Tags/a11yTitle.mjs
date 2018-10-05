export const a11yTitle = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { tags: ['one', 'five'] };
  }  
  render() {
    const { tags } = this.state;
    return (
      <Tags
        a11yTitle='Grommet tags'
        value={tags}
      />
    );
  }
}    

render(<Demo />);  
`;
