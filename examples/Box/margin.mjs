export const margin = `const Demo = () => (
  <Box direction='row' gap='medium' wrap={true}>
    {['none', 'xsmall', 'small', 'medium'].map(margin => (
      <Box
        key={margin}
        margin={margin}
        pad='small'
        background={{ color: 'accent-2', opacity: 'strong' }}
      />
    ))}
  </Box>
);

render(<Demo />);
`;
