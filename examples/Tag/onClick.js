export const onClick = `const Demo = () => (
  <Box align='start'>
    <Tag
      onClick={() => alert('Clicked on label')}
    />
  </Box>  
);

render(<Demo />);  
`;
