export const gap = `const Demo = () => (
  <Box direction='row' gap='medium' wrap={true}>
    {['xsmall', 'small', 'medium', 'large'].map(gap => (
      <Box
        key={gap}
        gap={gap}
        direction='row'
        background={{ color: 'accent-2', opacity: 'weak' }}
        margin='xsmall'
      >
        <Box
          background={{ color: 'accent-2', opacity: 'strong' }}
          pad='small'
        />
        <Box
          background={{ color: 'accent-2', opacity: 'strong' }}
          pad='small'
        />
      </Box>
    ))}
  </Box>
);

render(<Demo />);
`;
