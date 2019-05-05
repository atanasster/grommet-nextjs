export const wrap = `const Demo = () => (
  <Box direction='row' gap='medium' wrap={true}>
    <Box
      basis='small'
      align='end'
      direction='row'
      wrap={true}
      background={{ color: 'accent-2', opacity: 'weak' }}
    >
      {[0, 1, 2, 3, 4, 5, 6].map(index => (
        <Box
          key={index * 10}
          pad='small'
          margin='xsmall'
          background={{ color: 'accent-2', opacity: 'strong' }}
        />
      ))}
    </Box>
  </Box>
);

render(<Demo />);
`;
