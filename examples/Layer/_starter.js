// eslint-disable-next-line no-underscore-dangle
export const _starter = `class Demo extends React.Component {
  constructor(){
    super();
    this.state = {
      show: false,
    };
  }  
  render() {
    const { show } = this.state;
    let layerNode;
    if (show) {
      const close = () => this.setState({ show: false });
      layerNode = (
        <Layer
          position='center'
          onEsc={close}
        >
          <Box pad={{ horizontal: 'medium' }}>
            <Heading level={2} margin='medium'>Confirm</Heading>
            <Text>
              Are you sure you want to close this layer?
            </Text>
            <Box align='start' margin={{ vertical: 'medium' }}>
              <Button primary={true} label='Sure, close it' onClick={close} />
            </Box>
          </Box>
        </Layer>
      );
    }     
    return (
      <Box align='center'>
        <Button
          label='Layer'
          onClick={() => this.setState({ show: true })}
        />
        {layerNode}
      </Box>  
    );  
  }
}

render(<Demo />);
`;
