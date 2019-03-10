import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { TableCell } from '../../grommet/TableCell';


const ALIGN_MAP = {
  left: 'start',
  center: 'center',
  right: 'end',
};

export const TableSummaryCell = ({
  colSpan, style, children,
  tableColumn, tableRow, row,
  ...restProps
}) => (
  <TableCell
    tableContext='cell-summary'
    style={style}
    colSpan={colSpan}
    {...restProps}
  >
    {console.log(tableColumn.align)}
    <Box
      gap='small'
      fill={true}
      align={tableColumn && ALIGN_MAP[tableColumn.align]}
    >
      {children}
    </Box>
  </TableCell>
);

TableSummaryCell.propTypes = {
  style: PropTypes.object,
  colSpan: PropTypes.number,
  children: PropTypes.node,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
  row: PropTypes.any,
};

TableSummaryCell.defaultProps = {
  style: null,
  colSpan: 1,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
  children: undefined,
};
