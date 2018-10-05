export const anchor = `const Demo = () => (
  <Box>
    <Box margin='xsmall'>
      <Stack anchor='top-left'>
        <Box pad='small' border='all'><strong>AAA</strong></Box>
        <Box pad='xsmall' background={{ color: 'light-3', opacity: 'medium' }}>bb</Box>
      </Stack>
    </Box>
    <Box margin='xsmall'>
      <Stack anchor='left'>
        <Box pad='small' border='all'><strong>CCC</strong></Box>
        <Box pad='xsmall' background={{ color: 'light-3', opacity: 'medium' }}>dd</Box>
      </Stack>
    </Box>
    <Box margin='xsmall'>
      <Stack anchor='center'>
        <Box pad='small' border='all'><strong>EEE</strong></Box>
        <Box pad='xsmall' background={{ color: 'light-3', opacity: 'medium' }}>gg</Box>
      </Stack>
    </Box>
  </Box>
);

render(<Demo />);  
`;
