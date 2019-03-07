import React from 'react';
import PropTypes from 'prop-types';
import { TableCell as GrommetCell } from '../utils/TableCell';

export const TableCell = ({
  column, value, children,
  tableRow, tableColumn, row,
  ...rest
}) => (
  <GrommetCell
    plain={true}
    align={tableColumn && tableColumn.align}
    noWrap={!(tableColumn && tableColumn.wordWrapEnabled)}
    {...rest}
  >
    {children || value}
  </GrommetCell>
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
