export const run = `const Demo = () => (
  <Box>
    {[false, 'backward', 'forward'].map(run => (
      <Box
        key={run}
        margin={{ bottom: 'xsmall' }}
        gap='xsmall'
      >
        <Clock run={run} type='analog' />
        <Clock run={run} type='digital' />
      </Box>
    ))}
  </Box>
);

render(<Demo />);  
`;
