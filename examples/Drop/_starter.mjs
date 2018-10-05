// eslint-disable-next-line no-underscore-dangle
export const _starter = `class Demo extends React.Component {
  constructor(){
    super();
    this.targetRef = React.createRef()
  }  

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    return (
      <Box align='start'>
        <Box
          background='dark-4'
          pad='medium'
          align='center'
          justify='start'
          ref={this.targetRef}
        >
          Target
        </Box>
        {this.targetRef.current && (
          <Drop
            align={{ top: 'bottom', left: 'left' }}
            target={this.targetRef.current}
          >
            <Box pad='large'>
              Drop Contents
            </Box>
          </Drop>
        )}
      </Box>
    );
  }
}

render(<Demo />);
`;
