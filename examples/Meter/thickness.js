export const thickness = `const Demo = () => (
  <Box>
    {['xsmall', 'small', 'medium', 'large', 'xlarge'].map(thickness => (
      <Box key={thickness} margin={{ bottom: 'xsmall' }}>
        <Meter
          thickness={thickness}
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
