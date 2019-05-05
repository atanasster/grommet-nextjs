export const placeholder = `const Demo = () => (
  <MaskedInput
    mask={['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
    placeholder='Enter phone...'
  />
);

render(<Demo />);  
`;
