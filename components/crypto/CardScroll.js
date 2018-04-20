import React from 'react';
import { Box } from 'grommet';


export default ({ children }) => (
  <Box flex='grow' overflow='scroll' fill='horizontal'>
    <Box pad='small'>
      <Box direction='row' wrap={true} justify='between'>
        {children}
      </Box>
    </Box>
  </Box>
);

