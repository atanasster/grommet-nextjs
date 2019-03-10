import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const StyledTableRow = styled.tr`
  ${props => props.tableContextTheme && props.tableContextTheme.extend}
`;

export const TableRow = withTheme(({ theme, tableContext, ...props }) => {
  const tableContextTheme = (theme && theme.dxgrid && theme.dxgrid[tableContext]) || {};
  return (
    <StyledTableRow
      tableContextTheme={tableContextTheme}
      theme={theme}
      {...props}
    />
  );
});

TableRow.defaultProps = {
  tableContext: 'row',
};


TableRow.propTypes = {
  tableContext: PropTypes.string,
};
