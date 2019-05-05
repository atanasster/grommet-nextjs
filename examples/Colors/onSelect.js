export const onSelect = `const Demo = () => (
  <Colors
    size='small'
    colors={basicColors}
    onSelect={(option) => { alert(JSON.stringify(option)); }}
  />
);

render(<Demo />);  
`;
