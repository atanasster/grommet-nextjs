export const values = `const Demo = () => (
  <Box>
    {['bar', 'area'].map(type => (
      <Box key={type} margin={{ bottom: 'xsmall' }}>
        <Chart
          aria-label={type + ' ranged chart'}
          type={type}
          bounds={[[0, 7], [0, 100]]}
          size={{ width: 'medium', height: 'small' }}
          values={[
            { value: [7, 0, 100], label: 'one hundred' },
            { value: [6, 10, 70], label: 'seventy' },
            { value: [5, 20, 60], label: 'sixty' },
            { value: [4, 60, 80], label: 'eighty' },
            { value: [3, 30, 40], label: 'forty' },
            { value: [2, 0], label: 'zero' },
            { value: [1, 10, 30], label: 'thirty' },
            { value: [0, 20, 60], label: 'sixty' },
          ]}
        />
      </Box>
    ))}            
  </Box>
);

render(<Demo />);    
`;
