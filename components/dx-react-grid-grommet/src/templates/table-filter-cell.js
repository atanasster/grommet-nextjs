import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { StyledTableCell } from './table-cell';

const TableFilterCellBase = ({
  filter, getMessage, onFilter,
  children, tableRow, tableColumn,
  column, filteringEnabled,
  ...restProps
}) => (
  <StyledTableCell
    {...restProps}
  >
    <Box direction='row' align='center'>
      {children}
    </Box>
  </StyledTableCell>
);

TableFilterCellBase.propTypes = {
  filter: PropTypes.object,
  onFilter: PropTypes.func,
  children: PropTypes.node,
  getMessage: PropTypes.func.isRequired,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  column: PropTypes.object,
  filteringEnabled: PropTypes.bool,
};

TableFilterCellBase.defaultProps = {
  filter: null,
  onFilter: () => {},
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  column: undefined,
  filteringEnabled: true,
};

export const TableFilterCell = TableFilterCellBase;
