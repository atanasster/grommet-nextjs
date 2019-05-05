export const elevation = `const Demo = () => (
  <Box direction='row' gap='medium' wrap={true}>
    {['none', 'xsmall', 'small', 'medium', 'large', 'xlarge']
    .map(elevation => (
      <Box
        key={elevation}
        elevation={elevation}
        pad='medium'
        margin='xsmall'
      />
    ))}
  </Box>
);

render(<Demo />);
`;
