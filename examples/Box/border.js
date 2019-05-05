export const border = `const Demo = () => (
  <Box direction='row' gap='medium' wrap={true}>
    {['small', 'medium', 'large'].map(size => (
      <Box
        key={size}
        border={{ side: 'all', size, color: 'accent-2' }}
        pad='small'
        margin='xsmall'
      />
    ))}
  </Box>
);

render(<Demo />);
`;
