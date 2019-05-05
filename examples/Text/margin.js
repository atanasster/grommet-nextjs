export const margin = `const Demo = () => (
  <Box direction='row' wrap={true}>
    {['none', 'small', 'medium', 'large'].map(margin => (
      <Box key={margin} margin='xsmall'>
        <Text margin={margin}>A</Text>
      </Box>
    ))}
  </Box>
);

render(<Demo />);  
`;
