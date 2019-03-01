import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TableRow } from 'grommet';

export const TableStubRow = ({
  children,
  tableRow,
  ...restProps
}) => (
  <TableRow
    {...restProps}
  >
    {children}
  </TableRow>
);

TableStubRow.propTypes = {
  children: PropTypes.node,
  tableRow: PropTypes.object,
};

TableStubRow.defaultProps = {
  children: undefined,
  tableRow: undefined,
};
