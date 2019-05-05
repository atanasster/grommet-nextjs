export const size = `const Demo = () => (
  <Box direction='row' gap='small' wrap={true}>
    {['xsmall', 'small', 'medium', 'large', 'xlarge'].map(size => (
      <Value
        key={size}
        size={size}
        value='30%'
        label={size}
      />
    ))}  
  </Box>  
);

render(<Demo />);  
`;
