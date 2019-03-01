import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'grommet';

const TitelBase = ({
  children, ...restProps
}) => (
  <Text truncate={true}
    {...restProps}
  >
    {children}
  </Text>
);

TitelBase.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

TitelBase.defaultProps = {
  children: undefined,
};

export const Title = TitelBase;
