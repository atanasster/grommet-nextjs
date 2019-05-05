export const margin = `class Demo extends React.Component {
  constructor(){
    super();
    this.state = {
      show: false,
      margin: undefined,
    };
  }  
  render() {
    const { margin, show } = this.state;
    let layerNode;
    if (show) {
      const close = () => this.setState({ show: false });
      layerNode = (
        <Layer
          margin={margin}
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
        {['none', 'xsmall', 'small', 'medium', 'large'].map(marginValue => (
          <Box key={marginValue} margin='small'>
            <Button
              active={marginValue === margin}
              label={marginValue}
              onClick={() => this.setState({ show: true, margin: marginValue })}
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
