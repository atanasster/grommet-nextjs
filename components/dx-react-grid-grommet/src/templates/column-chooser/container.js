import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

export const Container = ({ children, ...restProps }) => (
  <Box
    as='nav'
    pad={{ vertical: 'small', left: 'small', right: 'medium' }}
    gap='xsmall'
    flex='grow'
    {...restProps}
  >
    {children}
  </Box>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
