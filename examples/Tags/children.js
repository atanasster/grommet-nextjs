export const children = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { tags: ['one', 'five'] };
  }  
  render() {
    const { tags } = this.state;
    return (
      <Tags
        value={tags}
        focusable={false}
        onChange={({ option }) => this.setState({ tags: option })}
      >
        {(tag, index) => (
          <Box key={index.toString()} pad={{ horizontal: 'xsmall' }}>
            <Button
              label={tag}
              icon={<Icons.Trash />}
              onClick={() => this.setState({ tags: tags.filter((_, index) => index !== tagIndex) })}
            />
          </Box>
        )}
      </Tags>
    );
  }
}    

render(<Demo />);  
`;
