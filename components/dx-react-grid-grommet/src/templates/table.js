import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import RootRef from '@material-ui/core/RootRef';
import { RefType } from '@devexpress/dx-react-core';
import { genericStyles, normalizeColor } from 'grommet/utils';

const StyledTable = styled.table`
  border-spacing: 0;
  table-layout: fixed;
  border-collapse: separate;
  ${genericStyles} ${props => props.theme.table && props.theme.table.extend};
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
    border-top: ${`solid ${props.theme.global.borderSize.small} ${normalizeColor('border', props.theme)}`};
    bottom: 0;
  `} 
`;
export const Table = withTheme(({
  tableRef, use, theme, ...rest
}) => (
  <RootRef rootRef={tableRef}>
    <StyledTable
      sticky={!!use}
      use={use}
      theme={theme}
      {...rest}
    />
  </RootRef>
));

Table.propTypes = {
  use: PropTypes.oneOf(['head', 'foot']),
  children: PropTypes.node.isRequired,
  tableRef: RefType.isRequired,
};

Table.defaultProps = {
  use: undefined,
};
