import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'grommet';

export const GroupPanelEmptyMessage = ({
  getMessage,
  ...restProps
}) => (
  <Text
    {...restProps}
  >
    {getMessage('groupByColumn')}
  </Text>
);

GroupPanelEmptyMessage.propTypes = {
  getMessage: PropTypes.func.isRequired,
  className: PropTypes.string,
};

GroupPanelEmptyMessage.defaultProps = {
  className: undefined,
};
