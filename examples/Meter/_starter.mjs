// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Box align='center'>
    <Meter
      aria-label='Meter example'
      type='circle'
      size='small'
      thickness='large'
      round={true}
      values={[{ value: 60, label: 'sixty' }]}
    />
  </Box>  
);

render(<Demo />);  
`;
