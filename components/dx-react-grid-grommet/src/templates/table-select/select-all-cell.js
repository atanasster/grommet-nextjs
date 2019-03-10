import React from 'react';
import PropTypes from 'prop-types';
import { CheckBox } from 'grommet';
import { StyledSelectCell } from './cell';


export const SelectAllCell = ({
  allSelected, someSelected, disabled, onToggle,
  tableRow, tableColumn, rowSpan,
  ...restProps
}) => (
  <StyledSelectCell
    tableContext='cell-select-all'
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

SelectAllCell.propTypes = {
  allSelected: PropTypes.bool,
  someSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
  rowSpan: PropTypes.number,
};

SelectAllCell.defaultProps = {
  allSelected: false,
  someSelected: false,
  disabled: false,
  onToggle: () => {},
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined,
};
