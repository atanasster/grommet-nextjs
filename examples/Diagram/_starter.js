// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Box align='center'>
    <Stack>
      <Box>
        <Box direction='row'>
          {[1, 2].map(id => (
            <Box
              key={id}
              id={id}
              basis='xsmall'
              margin='small'
              pad='medium'
              round='small'
              background='light-2'
            />
          ))}
        </Box>
        <Box direction='row'>
          {[3, 4].map(id => (
            <Box
              key={id}
              id={id}
              basis='xsmall'
              margin='small'
              pad='medium'
              round='small'
              background='light-2'
            />
          ))}
        </Box>
      </Box>
      <Diagram
        connections={[
          {
            fromTarget: '1',
            toTarget: '2',
            thickness: 'xsmall',
            round: true,
          },
          {
            fromTarget: '1',
            toTarget: '4',
            thickness: 'xsmall',
            round: true,
          },
        ]}
      />
    </Stack>
  </Box>  
);

render(<Demo />);  
`;
