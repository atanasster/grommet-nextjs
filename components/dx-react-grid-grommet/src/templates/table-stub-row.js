import React from 'react';
import PropTypes from 'prop-types';
import { TableRow as TableRowGrommet } from '../grommet/TableRow';

export const TableStubRow = ({
  children,
  tableRow,
  ...restProps
}) => (
  <TableRowGrommet
    tableContext='row-stub'
    {...restProps}
  >
    {children}
  </TableRowGrommet>
);

TableStubRow.propTypes = {
  children: PropTypes.node,
  tableRow: PropTypes.object,
};

TableStubRow.defaultProps = {
  children: undefined,
  tableRow: undefined,
};
