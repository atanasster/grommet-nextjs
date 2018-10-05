export const round = `const Demo = () => (
  <Meter
    round={true}
    size='small'
    values={[
      { value: 60, label: 'sixty', onClick: () => alert('60') },
    ]}
    aria-label='rounded meter'
  />
);

render(<Demo />);  
`;
