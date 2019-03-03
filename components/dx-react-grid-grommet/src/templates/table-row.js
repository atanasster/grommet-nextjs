import React from 'react';
import PropTypes from 'prop-types';
import { TableRow as TableRowGrommet } from 'grommet';

export const TableRow = ({
  children,
  row, tableRow,
  ...rest
}) => (
  <TableRowGrommet
    {...rest}
  >
    {children}
  </TableRowGrommet>
);

TableRow.propTypes = {
  children: PropTypes.node,
  row: PropTypes.any,
  tableRow: PropTypes.object,
};

TableRow.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
};
