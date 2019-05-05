export const status = `const Demo = () => (
  <Box gap='small'>
    {['ok', 'info', 'warning', 'error', 'unknown', 'disabled'].map(status => (
      <Notification
        key={status}
        status={status}
        onClose={() => {}}
      /> 
    ))}
  </Box>    
);

render(<Demo />);  
`;
