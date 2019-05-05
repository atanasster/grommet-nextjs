export const type = `const Demo = () => (
  <Box>
    {['bar', 'circle'].map(type => (
      <Box key={type} margin={{ bottom: 'xsmall' }}>
        <Meter
          type={type}
          size='small'
          values={[
            { value: 60, label: 'sixty', onClick: () => alert('60') },
          ]}
        />
      </Box>
    ))}
  </Box>      
);

render(<Demo />);  
`;
