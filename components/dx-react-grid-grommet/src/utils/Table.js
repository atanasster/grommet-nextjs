import React from 'react';
import styled, { withTheme, ThemeContext, css } from 'styled-components';
import { deepMerge, normalizeColor } from 'grommet/utils';
import { genericStyles } from 'grommet/utils/styles';

const StyledTable = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  width: inherit;
  ${genericStyles}
  ${props => props.theme.dxgrid && props.theme.dxgrid.extend};
`;
const defaultTheme = {
  dxgrid: {
    'cell': {
      extend: css`
padding: ${props => props.theme.global.edgeSize.xsmall};
      `,
    },
    'cell-banded-header': {
      extend: css`
 border-bottom: ${props => props.theme.global.control.border.width} solid
    ${props => normalizeColor('border', props.theme)};
      `,
    },
    'cell-filter': undefined,
    'cell-nodata': undefined,
    'cell-stub': undefined,
    'cell-toggle': undefined,
    'header': {
      extend: css`
 border-bottom: ${props => props.theme.global.control.border.width} solid
    ${props => normalizeColor('border', props.theme)};
      `,
    },
    'footer': {
      extend: css`
 border-top: ${props => props.theme.global.control.border.width} solid
    ${props => normalizeColor('border', props.theme)};
      `,
    },
    'row': undefined,
    'row-select': undefined,
    'row-stub': undefined,
    'row-banded-header': undefined,
    'row-filter': {
      extend: css`
 border-top: ${props => props.theme.global.control.border.width} solid
    ${props => normalizeColor('border', props.theme)};
      `,
    },
  },
};

export const Table = withTheme(({ theme, ...rest }) => {
  const extTheme = deepMerge(defaultTheme, theme);
  return (
    <ThemeContext.Provider value={extTheme}>
      <StyledTable theme={extTheme} {...rest} />
    </ThemeContext.Provider>
  );
});
