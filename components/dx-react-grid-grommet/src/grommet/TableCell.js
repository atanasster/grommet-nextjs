import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const StyledTableCell = styled.td`
  font-weight: inherit;
  text-align: inherit;
  height: 100%;
  ${props => props.verticalAlign && `vertical-align: ${props.verticalAlign};`}
  ${props => (props.align === 'right') && 'text-align: right;'}
  ${props => (props.align === 'center') && 'text-align: center;'}
  ${props => props.noWrap && 'white-space: nowrap;'}
  ${props => props.tableContextTheme && props.tableContextTheme.extend}
`;

export const TableCell = withTheme(({
  scope,
  theme,
  verticalAlign,
  tableContext,
  ...rest
}) => {
  let tableContextTheme = (theme.dxgrid && theme.dxgrid[tableContext]);
  tableContextTheme = (theme.dxgrid && theme.dxgrid[tableContextTheme]) || tableContextTheme;
  return (
    <StyledTableCell
      as={scope ? 'th' : undefined}
      scope={scope}
      tableContext={tableContext}
      tableContextTheme={tableContextTheme}
      theme={theme}
      verticalAlign={
        verticalAlign ||
        (tableContextTheme ? tableContextTheme.verticalAlign : undefined)
      }
      {...rest}
    />
  );
});

TableCell.defaultProps = {
  tableContext: 'cell',
};


TableCell.propTypes = {
  tableContext: PropTypes.string,
};
