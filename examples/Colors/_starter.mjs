// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Colors
    size='small'
    onSelect={({ color }) => { alert(color); }}
    colors={uiColors}
  />
);

render(<Demo />);  
`;
