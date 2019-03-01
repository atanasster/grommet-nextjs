import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const ContentBase = ({
  column, align, children, ...restProps
}) => (
  <Box
    direction='row-responsive'
    align='center'
    justify={align === 'left' ? 'start' : 'end'}
    {...restProps}
  >
    {children}
  </Box>
);

ContentBase.propTypes = {
  column: PropTypes.object,
  align: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ContentBase.defaultProps = {
  column: undefined,
  align: 'left',
  children: undefined,
};

export const Content = ContentBase;
