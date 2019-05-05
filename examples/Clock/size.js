export const size = `const Demo = () => (
  <Box>
    {['small', 'medium', 'large', 'xlarge'].map(size => (
      <Box
        key={size}
        margin={{ bottom: 'xsmall' }}
        gap='xsmall'
      >
        <Clock
          size={size}
          run={false} 
        />
        <Clock
          size={size}
          run={false}
          type='digital'
        />
      </Box>
    ))}
  </Box>
);

render(<Demo />);  
`;
