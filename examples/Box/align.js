export const align = `const Demo = () => (
  <Box direction='row' gap='medium' wrap={true}>
    {['start', 'center', 'end'].map(align => (
      <Box
        key={align}
        direction='row'
        align={align}
        margin='xsmall'
        background={{ color: 'accent-2', opacity: 'weak' }}
      >
        <Box
          pad='medium'
          background={{ color: 'accent-2', opacity: 'weak' }}
        />
        <Box
          pad='small'
          background={{ color: 'accent-2', opacity: 'strong' }}
        />
      </Box>
    ))}
  </Box>
);

render(<Demo />);
`;
