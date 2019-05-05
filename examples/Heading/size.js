export const size = `const Demo = () => (
  <Box direction='row' wrap={true}>
    {[1, 2, 3, 4].map(level => (
      <Box key={level} direction='row' justify='end'>
        {['small', 'medium', 'large'].map(size => (
          <Box key={size} margin='xsmall'>
            <Heading level={level} margin='none' size={size}>
              A
            </Heading>
          </Box>
        ))}
      </Box>
    ))}
  </Box>
);

render(<Demo />);  
`;
