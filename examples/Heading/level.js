export const level = `const Demo = () => (
  <Box direction='row' wrap={true}>
    {[1, 2, 3, 4].map(level => (
      <Box key={level} margin='xsmall'>
        <Heading level={level} margin='none'>A</Heading>
      </Box>
    ))}
  </Box>
);

render(<Demo />);  
`;
