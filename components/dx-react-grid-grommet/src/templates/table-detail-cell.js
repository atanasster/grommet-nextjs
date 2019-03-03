import * as React from 'react';
import * as PropTypes from 'prop-types';
import { StyledTableCell } from './table-cell';


const TableDetailCellBase = ({
  colSpan, style, children,
  tableColumn, tableRow, row,
  ...restProps
}) => (
  <StyledTableCell
    style={style}
    colSpan={colSpan}
    {...restProps}
  >
    {children}
  </StyledTableCell>
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
