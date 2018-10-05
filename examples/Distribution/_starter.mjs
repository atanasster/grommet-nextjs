// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Distribution
    values={[
      { value: 70, color: 'light-3' },
      { value: 50, color: 'light-3' },
      { value: 30, color: 'brand' },
      { value: 10, color: 'light-3' },
    ]}
  >
    {value => (
      <Box pad='xsmall' background={value.color} fill={true}>
        <Text>{value.value}</Text>
      </Box>
    )}
  </Distribution>
);

render(<Demo />);  
`;
