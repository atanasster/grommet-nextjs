import React from 'react';
import PropTypes from 'prop-types';
import { TableCell } from '../grommet/TableCell';


export const TableStubCell = ({
  tableRow,
  tableColumn,
  ...restProps
}) => (
  <TableCell
    tableContext='cell-stub'
    {...restProps}
  />
);

TableStubCell.propTypes = {
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

TableStubCell.defaultProps = {
  tableRow: undefined,
  tableColumn: undefined,
};

