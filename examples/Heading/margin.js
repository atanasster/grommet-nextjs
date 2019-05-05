export const margin = `const Demo = () => (
  <Box direction='row' wrap={true}>
    {['none', 'small', 'medium', 'large'].map(margin => (
      <Box key={margin} margin='xsmall'>
        <Heading level={2} margin={margin}>A</Heading>
      </Box>
    ))}
  </Box>
);

render(<Demo />);  
`;
