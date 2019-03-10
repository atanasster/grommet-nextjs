import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { TableCell } from '../../grommet/TableCell';

export const TableTreeCell = ({
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

TableTreeCell.propTypes = {
  value: PropTypes.any,
  column: PropTypes.object,
  row: PropTypes.any,
  children: PropTypes.node,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

TableTreeCell.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};
