export const background = `const Demo = () => (
  <Box direction='row' gap='medium' wrap={true}>
    {[undefined, 'strong', 'medium', 'weak'].map(opacity => (
      <Box
        key={opacity || 'opacity'}
        background={{ color: 'accent-2', opacity }}
        pad='medium'
        margin='xsmall'
      />
    ))}
  </Box>
);

render(<Demo />);
`;
