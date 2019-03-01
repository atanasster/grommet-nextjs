import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

export const Root = ({
  children, classes, className, ...restProps
}) => (
  <Box
    {...restProps}
  >
    {children}
  </Box>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
};
