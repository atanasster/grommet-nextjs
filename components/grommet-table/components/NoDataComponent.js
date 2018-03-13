import React from 'react';
import { Box } from 'grommet';

export default ({ children, ...rest }) => (
  <Box {...rest} align='center' pad='small'>
    {children}
  </Box>
);

