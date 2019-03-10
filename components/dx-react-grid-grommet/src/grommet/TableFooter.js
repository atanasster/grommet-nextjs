import React from 'react';
import styled, { withTheme } from 'styled-components';

const StyledTableFooter = styled.tfoot`
  ${props => props.theme.dxgrid && props.theme.dxgrid.footer && props.theme.dxgrid.footer.extend};
`;

export const TableFooter = withTheme(props => (
  <StyledTableFooter {...props} />
));
