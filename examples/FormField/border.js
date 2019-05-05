export const border = `const Demo = () => (
  <Box gap='small'>
    <FormField
      label='Name'
      border={{ position: 'inner', size: 'small', color: 'brand' }}
    >
      <TextInput placeholder='inner small brand' />
    </FormField>
    <FormField
      label='Name'
      border={{ position: 'outer', side: 'all', size: 'small' }}
    >
      <TextInput placeholder='outer all small' />
    </FormField>
  </Box>
);

render(<Demo />);  
`;
