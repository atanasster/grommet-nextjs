import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'grommet';

const TableSummaryItemBase = ({
  children,
  type,
  value,
  getMessage,
  ...restProps
}) => (
  <Text
    {...restProps}
    weight='bold'
    margin={{ left: 'xsmall' }}
  >
    {
      <React.Fragment>
        {getMessage(type)}
        :&nbsp;
        {children}
      </React.Fragment>
    }
  </Text>
);

TableSummaryItemBase.propTypes = {
  value: PropTypes.number,
  type: PropTypes.string.isRequired,
  getMessage: PropTypes.func.isRequired,
  children: PropTypes.node,
};

TableSummaryItemBase.defaultProps = {
  value: null,
  children: undefined,
};

export const TableSummaryItem = TableSummaryItemBase;
