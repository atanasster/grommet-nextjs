import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { TableCell } from '../../grommet/TableCell';

export const TableFilterCell = ({
  filter, getMessage, onFilter,
  children, tableRow, tableColumn,
  column, filteringEnabled,
  ...restProps
}) => (
  <TableCell
    scope='col'
    tableContext='cell-filter'
    {...restProps}
  >
    <Box direction='row' align='center'>
      {children}
    </Box>
  </TableCell>
);

TableFilterCell.propTypes = {
  filter: PropTypes.object,
  onFilter: PropTypes.func,
  children: PropTypes.node,
  getMessage: PropTypes.func.isRequired,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  column: PropTypes.object,
  filteringEnabled: PropTypes.bool,
};

TableFilterCell.defaultProps = {
  filter: null,
  onFilter: () => {},
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  column: undefined,
  filteringEnabled: true,
};

