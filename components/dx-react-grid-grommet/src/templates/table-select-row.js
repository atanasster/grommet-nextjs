import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { selectedStyle } from 'grommet/utils';
import { StyledTableRow } from './table-row';


const StyledSelectRow = styled(StyledTableRow)`
  ${props => props.isSelected && selectedStyle}
`;

export const TableSelectRow = withTheme(({
  selected, selectByRowClick, onToggle,
  row, tableRow, tableColumn,
  children, theme,
  ...restProps
}) => (
  <StyledSelectRow
    theme={theme}
    isSelected={selected}
    onClick={(e) => {
      if (!selectByRowClick) return;
      e.stopPropagation();
      onToggle();
    }}
    {...restProps}
  >
    {children}
  </StyledSelectRow>
));

TableSelectRow.propTypes = {
  children: PropTypes.node,
  onToggle: PropTypes.func,
  selected: PropTypes.bool,
  selectByRowClick: PropTypes.bool,
  row: PropTypes.any,
  tableColumn: PropTypes.object,
  tableRow: PropTypes.object,
};

TableSelectRow.defaultProps = {
  children: undefined,
  onToggle: () => {},
  selected: false,
  selectByRowClick: false,
  row: undefined,
  tableColumn: undefined,
  tableRow: undefined,
};
