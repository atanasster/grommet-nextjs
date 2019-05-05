export const precision = `const Demo = () => (
  <Box>
    {['hours', 'minutes', 'seconds'].map(precision => (
      <Box
        key={precision}
        margin={{ bottom: 'xsmall' }}
        gap='xsmall'
      >
        <Clock
          precision={precision}
           run={false} 
        />
        <Clock
          precision={precision}
          run={false}
          type='digital'
        />
      </Box>
    ))}
  </Box>
);

render(<Demo />);  
`;
