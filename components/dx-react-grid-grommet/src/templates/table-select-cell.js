import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CheckBox } from 'grommet';
import { TableCell } from '../utils/TableCell';

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
  style: PropTypes.object,
  selected: PropTypes.bool,
  onToggle: PropTypes.func,
  row: PropTypes.any,
  tableRow: PropTypes.object,
  tableColumn: PropTypes.object,
};

TableSelectCell.defaultProps = {
  style: null,
  selected: false,
  onToggle: () => {},
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
};

