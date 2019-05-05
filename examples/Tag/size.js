export const size = `const Demo = () => (
  <Box align='start'>
  {['xsmall', 'small', 'medium', 'large' , 'xlarge', 'xxlarge'].map(size => (
      <Box key={size} margin='xsmall'>
        <Tag size={size} label={size} onChange={() => {}}/>
      </Box>
   ))}   
  </Box>  
);

render(<Demo />);  
`;
