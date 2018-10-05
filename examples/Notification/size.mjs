export const size = `const Demo = () => (
  <Box gap='small'>
  {['small', 'medium', 'large'].map(size => (
      <Notification
        status='warning'
        key={size}
        message={size}
        size={size}
        onClose={() => {}}
      />
   ))}   
  </Box>  
);

render(<Demo />);  
`;
