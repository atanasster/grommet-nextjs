import { Heading, Box } from 'grommet';

export default ({ children, name }) => (
  <Box
    pad={{ vertical: 'medium' }}
  >
    <Heading level={2} margin={{ top: 'none' }}>
      {name}
    </Heading>
    <Box direction='row' wrap={true}>
      {children}
    </Box>
  </Box>
);
