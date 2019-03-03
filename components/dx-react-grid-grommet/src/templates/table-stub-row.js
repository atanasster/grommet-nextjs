import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TableRow as TableRowGrommet } from 'grommet';

export const TableStubRow = ({
  children,
  tableRow,
  ...restProps
}) => (
  <TableRowGrommet
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
