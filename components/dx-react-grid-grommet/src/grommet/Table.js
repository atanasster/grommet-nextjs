import React from 'react';
import styled, { withTheme, ThemeContext } from 'styled-components';
import { deepMerge } from 'grommet/utils';
import { genericStyles } from 'grommet/utils/styles';
import { defaultTheme } from './dx-theme';

const StyledTable = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  width: inherit;
  ${genericStyles}
  ${props => props.theme.dxgrid && props.theme.dxgrid.extend};
`;


export const Table = withTheme(({ theme, ...rest }) => {
  const extTheme = deepMerge(defaultTheme, theme);
  return (
    <ThemeContext.Provider value={extTheme}>
      <StyledTable theme={extTheme} {...rest} />
    </ThemeContext.Provider>
  );
});
