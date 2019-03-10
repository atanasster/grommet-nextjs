import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CheckBox } from 'grommet';
import { TableCell } from '../../grommet/TableCell';

export const StyledSelectCell = styled(TableCell)`
  overflow: visible;
  text-align: center;
`;

export const TableSelectCell = ({
  selected, onToggle,
  row, tableRow, tableColumn,
  ...restProps
}) => (
  <StyledSelectCell
    tableContext='cell-select'
    {...restProps}
  >
    <CheckBox
      checked={selected}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      onChange={() => {}}
    />
  </StyledSelectCell>
);

TableSelectCell.propTypes = {
  tableContext: PropTypes.string,
  style: PropTypes.object,
  selected: PropTypes.bool,
  onToggle: PropTypes.func,
  row: PropTypes.any,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

TableSelectCell.defaultProps = {
  tableContext: 'cell-select',
  style: null,
  selected: false,
  onToggle: () => {},
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};

