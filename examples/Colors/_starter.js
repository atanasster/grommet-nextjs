// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Box align='center'>
    <Colors
      size='small'
      onSelect={({ color }) => { alert(color); }}
      colors={uiColors}
    />
  </Box>  
);

render(<Demo />);  
`;
