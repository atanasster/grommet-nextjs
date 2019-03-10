import React from 'react';
import styled, { withTheme } from 'styled-components';

const StyledTableBody = styled.tbody`
  ${props => props.theme.dxgrid && props.theme.dxgrid.body && props.theme.dxgrid.body.extend};
`;

export const TableBody = withTheme(props => (
  <StyledTableBody {...props} />
));
