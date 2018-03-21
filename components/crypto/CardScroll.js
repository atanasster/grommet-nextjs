import React from 'react';
import { Box } from 'grommet';


export default ({ children, responsive }) => (
  <Box flex='grow' overflow='scroll' fill='horizontal'>
    <Box pad={{ horizontal: responsive ? undefined : 'medium' }}>
      <Box direction='row' wrap={true} justify='between'>
        {children}
      </Box>
    </Box>
  </Box>
);

