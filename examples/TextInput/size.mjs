export const size = `const Demo = () => (
  <Box gap='small'>
    {['small', 'medium', 'large', 'xlarge' ].map(size => (
      <TextInput
        key={size}
        size={size}
        defaultValue={size}
      />
    ))}  
  </Box>
);

render(<Demo />);  
`;
