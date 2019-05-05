export const value = `const Demo = () => (
  <Box align='start' >
    <Value
      value={(
        <Box direction='row' align='center' gap='xsmall'>
          <Text size='large' weight='bold' color='status-error'>30%</Text>
          <Icons.Down color='status-error' />
        </Box>
       )}
      label='custom value'
    />
  </Box>  
);

render(<Demo />);  
`;
