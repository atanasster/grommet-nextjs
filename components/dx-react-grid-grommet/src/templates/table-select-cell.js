import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { CheckBox } from 'grommet';
import { StyledTableCell } from './table-cell';

export const StyledSelectCell = styled(StyledTableCell)`
  overflow: visible;
  padding-right: 0,
  text-align: center;
  padding-top: ${props => props.theme.global.edgeSize.xsmall};
  padding-bottom: ${props => props.theme.global.edgeSize.xsmall}; 
`;

export const TableSelectCell = withTheme(({
  style, selected, onToggle, classes, theme,
  className, row, tableRow, tableColumn,
  ...restProps
}) => (
  <StyledSelectCell
    theme={theme}
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
));

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

