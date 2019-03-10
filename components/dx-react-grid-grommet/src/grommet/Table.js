import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { deepMerge, normalizeColor } from 'grommet/utils';
import { genericStyles } from 'grommet/utils/styles';
import { defaultTheme } from './dx-theme';

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  ${props => props.sticky && `
    position: sticky;
    z-index: 500;
    overflow: visible;
    background: ${normalizeColor('background', props.theme)};
    fallbacks: {
      position: -webkit-sticky;
    }
  `}
  ${props => (props.use === 'head') && `
    top: 0;
  `}
  ${props => (props.use === 'foot') && `
    bottom: 0;
  `} 

  ${genericStyles}
  ${props => props.theme.dxgrid && props.theme.dxgrid.extend};
`;

class TableClass extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          const extTheme = deepMerge(defaultTheme, theme);
          return (
            <ThemeContext.Provider value={extTheme}>
              <StyledTable theme={extTheme} {...this.props} />
            </ThemeContext.Provider>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}


export const Table = TableClass;
