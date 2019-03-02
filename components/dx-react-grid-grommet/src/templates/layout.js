import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

export const Root = ({
  children, ...rest
}) => (
  <Box
    {...rest}
  >
    {children}
  </Box>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
};
