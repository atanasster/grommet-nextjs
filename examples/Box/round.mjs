export const round = `const Demo = () => (
  <Box direction='row' gap='medium' wrap={true}>
    {['xsmall', 'small', 'medium'].map(round => (
      <Box
        key={round}
        round={round}
        pad='medium'
        background={{ color: 'accent-2', opacity: 'strong' }}
        margin='xsmall'
      />
    ))}
  </Box>
);

render(<Demo />);
`;
