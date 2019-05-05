export const position = `class Demo extends React.Component {
  constructor(){
    super();
    this.state = {
      show: false,
      position: undefined,
    };
  }  
  render() {
    const { position, show } = this.state;
    let layerNode;
    if (show) {
      const close = () => this.setState({ show: false });
      layerNode = (
        <Layer
          position={position}
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
      <Box>
        {['bottom', 'center', 'hidden', 'left', 'right', 'top'].map(positionValue => (
          <Box key={positionValue} margin='small'>
            <Button
              active={positionValue === position}
              label={positionValue}
              onClick={() => this.setState({ show: true, position: positionValue })}
            />
          </Box>
        ))}
        {layerNode}
      </Box>
    );  
  }
}

render(<Demo />);
`;
