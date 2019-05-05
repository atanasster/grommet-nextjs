export const full = `class Demo extends React.Component {
  constructor(){
    super();
    this.state = {
      show: false,
      full: undefined,
    };
  }  
  render() {
    const { full, show } = this.state;
    let layerNode;
    if (show) {
      const close = () => this.setState({ show: false });
      layerNode = (
        <Layer
          full={full}
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
        {[true, false, 'horizontal', 'vertical'].map(fullValue => (
          <Box key={fullValue} margin='small'>
            <Button
              active={fullValue === full}
              label={fullValue.toString()}
              onClick={() => this.setState({ show: true, full: fullValue })}
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
