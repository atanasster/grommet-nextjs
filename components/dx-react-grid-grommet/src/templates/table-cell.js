import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TableCell as GrommetCell } from 'grommet';

const StyledCell = styled(GrommetCell)`
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
`;


export const StyledTableCell = props => <StyledCell plain={true} {...props} />;


export const TableCell = ({
  column, value, children,
  tableRow, tableColumn, row,
  ...rest
}) => (
  <StyledTableCell
    plain={true}
    align={tableColumn && tableColumn.align}
    noWrap={!(tableColumn && tableColumn.wordWrapEnabled)}
    {...rest}
  >
    {children || value}
  </StyledTableCell>
);

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
