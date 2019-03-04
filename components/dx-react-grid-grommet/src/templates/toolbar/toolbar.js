import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';


export const Toolbar = ({
  children, classes, style, ...restProps
}) => (
  <Box
    border='bottom'
    direction='row-responsive'
    style={style}
    align='center'
    pad='xsmall'
    gap='xsmall'
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

