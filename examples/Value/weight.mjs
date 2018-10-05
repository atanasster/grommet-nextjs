export const weight = `const Demo = () => (
  <Box direction='row' gap='small' wrap={true}>
    {['normal', 'bold', 400].map(weight => (
      <Value
        key={weight}
        weight={weight}
        value='30%'
        label={weight}
      />
    ))}  
  </Box>  
);

render(<Demo />);  
`;
