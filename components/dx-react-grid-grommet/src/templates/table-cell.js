import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TableCell as GrommetTableCell } from 'grommet';


export const TableCell = ({
  column, value, children, classes,
  tableRow, tableColumn, row,
  className,
  ...restProps
}) => (
  <GrommetTableCell
    {...restProps}
  >
    {children || value}
  </GrommetTableCell>
);

TableCell.propTypes = {
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.any,
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

TableCell.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};
