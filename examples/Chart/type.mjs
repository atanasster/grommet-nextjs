export const type = `const Demo = () => (
  <Box>
    {['bar', 'line', 'area'].map(type => (
      <Box key={type} margin={{ bottom: 'xsmall' }}>
        <Chart
          aria-label={type + ' type chart'}
          type={type}
          bounds={[[0, 7], [0, 100]]}
          size={{ width: 'medium', height: 'small' }}
          values={[
            { value: [7, 90], label: 'ninety' },
            { value: [6, 80], label: 'eighty' },
            { value: [5, 60], label: 'sixty' },
            { value: [4, 70], label: 'seventy' },
            { value: [3, 60], label: 'sixty' },
            { value: [2, 40], label: 'forty' },
            { value: [1, 30], label: 'thirty' },
            { value: [0, 10], label: 'ten' },
          ]}
        />
      </Box>
    ))}            
  </Box> 
);

render(<Demo />);   
`;
