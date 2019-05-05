// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Accordion>
    <AccordionPanel label='Panel 1'>
      <Box
        align='center'
        justify='center'
        background={{ color: 'brand', opacity: 'weak' }}
        height='small'
      >
        <Text color='text'>Panel 1 contents</Text>
      </Box>
    </AccordionPanel>
    <AccordionPanel label='Panel 2'>
      <Box
        align='center'
        justify='center'
        background={{ color: 'brand', opacity: 'weak' }}
        height='small'
      >
        <Text color='text'>Panel 2 contents</Text>
      </Box>
    </AccordionPanel>
  </Accordion>
);

render(<Demo />);  
`;
