import React from 'react';
import PropTypes from 'prop-types';
import { TableCell } from '../../grommet/TableCell';


export const TableDetailCell = ({
  colSpan, style, children,
  tableColumn, tableRow, row,
  ...restProps
}) => (
  <TableCell
    tableContext='cell-detail'
    style={style}
    colSpan={colSpan}
    {...restProps}
  >
    {children}
  </TableCell>
);

TableDetailCell.propTypes = {
  style: PropTypes.object,
  colSpan: PropTypes.number,
  children: PropTypes.node,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  row: PropTypes.any,
};

TableDetailCell.defaultProps = {
  style: null,
  colSpan: 1,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
  children: undefined,
};
