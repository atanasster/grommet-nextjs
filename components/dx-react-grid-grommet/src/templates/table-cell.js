import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

export const StyledTableCell = styled.td`
  padding-left: ${props => props.theme.global.edgeSize.xsmall};
  padding-right: ${props => props.theme.global.edgeSize.xsmall};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: inherit;
  height: 100%;
  &:first-child {
      padding-left: ${props => props.theme.global.edgeSize.small};
  }
  ${props => (props.align === 'right') && `
    text-align: right;
  `}
  
  ${props => (props.align === 'center') && `
    text-align: center;
  `}
  ${props => props.noWrap && `
    white-space: nowrap;
  `}
  ${props => props.theme.table.cell && props.theme.table.cell.extend}
`;


export const TableCell = withTheme(({
  column, value, children, classes,
  tableRow, tableColumn, row,
  className,
  ...rest
}) => (
  <StyledTableCell
    align={tableColumn && tableColumn.align}
    noWrap={!(tableColumn && tableColumn.wordWrapEnabled)}
    {...rest}
  >
    {children || value}
  </StyledTableCell>
));

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
