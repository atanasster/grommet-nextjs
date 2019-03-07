import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const GroupPanelContainerBase = ({
  classes,
  children,
  ...restProps
}) => (
  <Box
    direction='row'
    wrap={true}
    width='full'
    gap='small'
    pad={{ vertical: 'small' }}
    {...restProps}
  >
    {children}
  </Box>
);

GroupPanelContainerBase.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

GroupPanelContainerBase.defaultProps = {
  children: undefined,
  className: undefined,
};

export const GroupPanelContainer = GroupPanelContainerBase;
