export const mask = `const Demo = () => (
  <MaskedInput
    placeholder='US phone number with country code'
    mask={['+', '1', ' ', '(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
  />
);

render(<Demo />);  
`;
