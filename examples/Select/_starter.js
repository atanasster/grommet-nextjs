// eslint-disable-next-line no-underscore-dangle
export const _starter = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { size: 'small' };
  }
  render() {
    const { size } = this.state;
    return (
      <Box align='center'>
        <Select
          options={['small', 'medium', 'large', 'xlarge', 'huge']}
          value={size}
          onChange={({ option }) => this.setState({ size: option })}
        />
      </Box>  
    );
  }
}  

render(<Demo />);    
`;
