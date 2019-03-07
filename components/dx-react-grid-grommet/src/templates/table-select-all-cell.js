import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CheckBox } from 'grommet';
import { StyledSelectCell } from './table-select-cell';

const AllSelectionCell = styled(StyledSelectCell)`
  ${props => props.alignWithRowSpan && `
    vertical-align: bottom;
  `}
`;

const TableSelectAllCellBase = ({
  allSelected, someSelected, disabled, onToggle,
  tableRow, tableColumn, rowSpan,
  ...restProps
}) => (
  <AllSelectionCell
    scope='col'
    alignWithRowSpan={rowSpan > 1}
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
  </AllSelectionCell>
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
