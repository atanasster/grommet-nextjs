import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';


export const Toolbar = ({
  children, classes, className, style, ...restProps
}) => (
  <Box
    border='bottom'
    direction='row-responsive'
    style={style}
    {...restProps}
  >
    {children}
  </Box>
);

Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Toolbar.defaultProps = {
  style: null,
};

