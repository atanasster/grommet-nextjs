import { Box, Heading } from 'grommet';
import RoutedAnchor from './RoutedAnchor';

export default ({
  name, path, children, center,
}) => (
  <Box basis='medium' margin={{ right: 'medium', bottom: 'medium' }}>
    <RoutedAnchor path={path} >
      <Box>
        <Heading level={3} size='small' margin={{ top: 'none', bottom: 'xsmall' }}>
          <strong>{name}</strong>
        </Heading>
      </Box>
    </RoutedAnchor>
    <Box>
      <Box
        basis='small'
        border={{ color: 'brand', size: 'medium' }}
        justify={center ? 'center' : undefined}
        align={center ? 'center' : undefined}
        pad={center ? 'medium' : undefined}
        style={{ overflow: 'hidden' }}
      >
        {children}
      </Box>
    </Box>
  </Box>
);
