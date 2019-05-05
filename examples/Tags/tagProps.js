export const tagProps = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { selected: ['one', 'five'] };
  }  
  render() {
    const { selected } = this.state;
    return (
      <Box align='start'>
        <Tags
          value={selected}
          onChange={({ value }) => this.setState({ selected: value })}
          tagProps={{
            background: 'status-critical',
            size: 'large',
            border: { color: 'brand', size: 'medium' },
          }}
        />
      </Box>  
    );
  }
}    

render(<Demo />);  
`;
