export const name = `const Demo = () => (
  <MaskedInput
    mask={[/\\d/, /\\d/, '/', /\\d/, /\\d/, '/', /\\d/, /\\d/, /\\d/, /\\d/]}
    pipe={MaskedInput.createAutoCorrectedDatePipe()}
    placeholder='Please enter a date'
    keepCharPositions={true}
    id='date-id'
    name='date-name'
  />
);

render(<Demo />);  
`;
