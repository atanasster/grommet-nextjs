export const pipe = `const Demo = () => (
  <MaskedInput
    mask={[MaskedInput.alphabetic, MaskedInput.digit, MaskedInput.alphabetic, ' ', MaskedInput.digit, MaskedInput.alphabetic, MaskedInput.digit]}
    pipe={conformedValue => ({ value: conformedValue.toUpperCase() })}
    placeholder='K1A 0B2'
    placeholderChar={MaskedInput.placeholderChars.underscore}
  />
);

render(<Demo />);  
`;
