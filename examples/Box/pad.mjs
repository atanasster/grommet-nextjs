export const pad = `const Demo = () => (
  <Box direction='row' gap='medium' wrap={true}>
    {['none', 'xsmall', 'small', 'medium'].map(pad => (
      <Box
        key={pad}
        pad={pad}
        background={{ color: 'accent-2', opacity: 'weak' }}
        margin='xsmall'
      >
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
