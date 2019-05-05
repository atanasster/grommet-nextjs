export const size = `const Demo = () => (
  <Box direction='row' wrap={true}>
    {['xsmall', 'small', 'medium', 'large' , 'xlarge', 'xxlarge'].map(size => (
      <Box key={size} margin='xsmall'>
        <Text size={size}>
          A
        </Text>
      </Box>
    ))}
  </Box>
);

render(<Demo />);  
`;
