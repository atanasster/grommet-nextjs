export const modal = `class Demo extends React.Component {
  constructor(){
    super();
    this.state = {
      show: false,
      modal: undefined,
    };
  }  
  render() {
    const { modal, show } = this.state;
    let layerNode;
    if (show) {
      const close = () => this.setState({ show: false });
      layerNode = (
        <Layer
          modal={modal}
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
        {[true, false].map(modalValue => (
          <Box key={modalValue} margin='small'>
            <Button
              active={modalValue === modal}
              label={modalValue.toString()}
              onClick={() => this.setState({ show: true, modal: modalValue })}
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
