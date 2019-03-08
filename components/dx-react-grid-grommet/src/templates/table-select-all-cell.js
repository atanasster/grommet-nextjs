import React from 'react';
import PropTypes from 'prop-types';
import { CheckBox } from 'grommet';
import { StyledSelectCell } from './table-select-cell';


const TableSelectAllCellBase = ({
  allSelected, someSelected, disabled, onToggle,
  tableRow, tableColumn, rowSpan,
  ...restProps
}) => (
  <StyledSelectCell
    scope='col'
    rowSpan={rowSpan}
    {...restProps}
  >
    <CheckBox
      checked={allSelected}
      indeterminate={someSelected}
      disabled={disabled}
      onChange={() => {}}
      onClick={(e) => {
          if (disabled) return;

          e.stopPropagation();
          onToggle();
        }}
    />
  </StyledSelectCell>
);

TableSelectAllCellBase.propTypes = {
  allSelected: PropTypes.bool,
  someSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  rowSpan: PropTypes.number,
};

TableSelectAllCellBase.defaultProps = {
  allSelected: false,
  someSelected: false,
  disabled: false,
  onToggle: () => {},
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined,
};

export const TableSelectAllCell = TableSelectAllCellBase;
