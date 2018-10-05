export const values = `const Demo = () => {
  const values = [
    { value: 60, label: 'sixty', color: 'neutral-1', onClick: () => alert('60') },
    { value: 10, label: 'ten', color: 'accent-1', onClick: () => alert('10') },
  ]
  return (
    <Box gap='small'>
      <Meter
        size='small'
        values={values}
        aria-label='multiple value meter'
      />
      <Meter
        round={true}
        size='small'
        values={values}
        aria-label='multiple value meter'
      />
      <Meter
        round={true}
        type='circle'
        size='small'
        values={values}
        aria-label='multiple value meter'
      />
    </Box>
  );
}  

render(<Demo />);  
`;
