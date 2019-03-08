import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'grommet';
import { TableCell } from '../utils/TableCell';

export const EditCell = ({
  column, value, onValueChange, style, children,
  row, tableRow, tableColumn, editingEnabled, ...restProps
}) => (
  <TableCell
    align={tableColumn && tableColumn.align}
    style={style}
    {...restProps}
  >
    {children || (
    <TextInput
      value={value || ''}
      disabled={!editingEnabled}
      onChange={e => onValueChange(e.target.value)}
    />
      )}
  </TableCell>
);

EditCell.propTypes = {
  column: PropTypes.object,
  row: PropTypes.any,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  value: PropTypes.any,
  onValueChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  editingEnabled: PropTypes.bool,
  children: PropTypes.node,
};

EditCell.defaultProps = {
  column: undefined,
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  value: '',
  style: null,
  children: undefined,
  editingEnabled: true,
};
