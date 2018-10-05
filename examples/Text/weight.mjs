export const weight = `const Demo = () => (
  <Box direction='row' wrap={true}>
    {['normal', 'bold', '200', '300' , '600', '700'].map(weight => (
      <Box key={weight} margin='xsmall'>
        <Text weight={weight}>
          {weight}
        </Text>
      </Box>
    ))}
  </Box>
);

render(<Demo />);  
`;
