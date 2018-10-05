export const background = `const Demo = () => (
  <Meter
    background={{ color: 'light-4', opacity: 'medium' }}
    size='small'
    values={[
      { value: 60, label: 'sixty', onClick: () => alert('60') },
    ]}
    aria-label='rounded meter'
  />
);

render(<Demo />);  
`;
