import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { TableCell } from '../../utils/TableCell';

const TableTreeCellBase = ({
  column, value, children,
  tableRow, tableColumn, row,
  ...restProps
}) => (
  <TableCell
    noWrap={!(tableColumn && tableColumn.wordWrapEnabled)}
    align={tableColumn && tableColumn.align}
    {...restProps}
  >
    <Box direction='row' align='center' gap='small'>
      {children}
    </Box>
  </TableCell>
);

TableTreeCellBase.propTypes = {
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.any,
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

TableTreeCellBase.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};

export const TableTreeCell = TableTreeCellBase;
