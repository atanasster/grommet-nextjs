export const justify = `const Demo = () => (
  <Box direction='row' gap='medium' wrap={true}>
    {['start', 'center', 'between', 'end'].map(justify => (
      <Box
        key={justify}
        basis='xsmall'
        direction='row'
        justify={justify}
        background={{ color: 'accent-2', opacity: 'weak' }}
        margin='xsmall'
      >
        <Box
          pad='small'
          background={{ color: 'accent-2', opacity: 'medium' }}
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
