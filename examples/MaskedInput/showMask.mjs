export const showMask = `const Demo = () => (
  <MaskedInput
    mask={['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
    showMask={true}
  />
);

render(<Demo />);  
`;
