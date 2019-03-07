import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TableCell } from '../utils/TableCell';


const TableDetailCellBase = ({
  colSpan, style, children,
  tableColumn, tableRow, row,
  ...restProps
}) => (
  <TableCell
    style={style}
    colSpan={colSpan}
    {...restProps}
  >
    {children}
  </TableCell>
);

TableDetailCellBase.propTypes = {
  style: PropTypes.object,
  colSpan: PropTypes.number,
  children: PropTypes.node,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  row: PropTypes.any,
};

TableDetailCellBase.defaultProps = {
  style: null,
  colSpan: 1,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
  children: undefined,
};

export const TableDetailCell = TableDetailCellBase;
