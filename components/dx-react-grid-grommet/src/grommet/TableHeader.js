import React from 'react';
import styled, { withTheme } from 'styled-components';

const StyledTableHeader = styled.thead`
  ${props => props.theme.dxgrid && props.theme.dxgrid.header && props.theme.dxgrid.header.extend};
`;

export const TableHeader = withTheme(props => (
  <StyledTableHeader {...props} />
));
