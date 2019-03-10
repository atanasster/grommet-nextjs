import React from 'react';
import { withComponents } from '@devexpress/dx-react-core';
import { TableSelection as TableSelectionBase } from '@devexpress/dx-react-grid';
import { SelectAllCell as HeaderCell } from '../templates/table-select/select-all-cell';
import { TableSelectCell as Cell } from '../templates/table-select/cell';
import { TableSelectRow as Row } from '../templates/table-select/row';

const TableSelectionWithWidth = props => (
  <TableSelectionBase
    selectionColumnWidth={58}
    {...props}
  />
);
TableSelectionWithWidth.components = TableSelectionBase.components;

export const TableSelection = withComponents({ Row, Cell, HeaderCell })(TableSelectionWithWidth);
TableSelection.COLUMN_TYPE = TableSelectionBase.COLUMN_TYPE;
