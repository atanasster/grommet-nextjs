export const type = `const Demo = () => (
  <Box>
    {['analog', 'digital'].map(type => (
      <Box
        key={type}
        margin={{ bottom: 'xsmall' }}
      >
        <Clock run={false} type={type} />
      </Box>
    ))}
  </Box>
);

render(<Demo />);  
`;
