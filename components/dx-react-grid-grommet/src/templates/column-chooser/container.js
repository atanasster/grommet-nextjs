import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

export const Container = ({ children, ...restProps }) => (
  <Box
    as='nav'
    {...restProps}
  >
    {children}
  </Box>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
