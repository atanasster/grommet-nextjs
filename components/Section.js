import { Heading, Box } from 'grommet';

export default ({ children, index, name }) => (
  <Box
    pad={{ vertical: 'medium' }}
    animation={[
      { type: 'zoomIn', duration: 500, delay: 100 + (100 * index) },
      { type: 'fadeIn', duration: 500, delay: (100 * index) },
    ]}
  >
    <Heading level={2} margin={{ top: 'none' }}>
      {name}
    </Heading>
    <Box direction='row' wrap={true}>
      {children}
    </Box>
  </Box>
);
