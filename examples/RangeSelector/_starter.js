// eslint-disable-next-line no-underscore-dangle
export const _starter = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { values: [3, 7] };
  }
  render() {
    const { values } = this.state;
    return (
      <Stack>
         <Box direction='row' justify='between'>
           {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
             <Box key={value} pad='small'>
               <Text style={{ fontFamily: 'monospace' }}>{value}</Text>
             </Box>
           ))}
         </Box>
         <RangeSelector
           direction='horizontal'
           invert={false}
           min={0}
           max={9}
           size='full'
           round='small'
           values={values}
           onChange={nextValues => this.setState({ values: nextValues })}
         />
       </Stack>
     );  
  }  
}

render(<Demo />);
`;
