// eslint-disable-next-line no-underscore-dangle
export const _starter = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { open } = this.state;
    return (
      <Box align='center'>
        <DropButton
          label='Fancy Selector'
          open={open}
          dropAlign={{ top: 'bottom', right: 'right' }}
          dropContent={
            <Box>
              <TextInput placeholder='Search' />
              {['one', 'two', 'three', 'four', 'five'].map((label, index) => (
                <Button
                  key={label}
                  hoverIndicator={true}
                  onClick={() => this.setState({ open: undefined })}
                >
                  <Box
                    direction='row'
                    justify='between'
                    align='center'
                    pad={{ horizontal: 'small', vertical: 'xsmall' }}
                  >
                    <Text>{label}</Text>
                    <Text>{index + 1}</Text>
                  </Box>
                </Button>
              ))}
            </Box>
          }
        />
     </Box>   
    );
  }
}

render(<Demo />); 
`;
