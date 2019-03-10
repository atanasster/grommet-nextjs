import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import RootRef from '@material-ui/core/RootRef';
import { RefType } from '@devexpress/dx-react-core';
import { normalizeColor } from 'grommet/utils';
import { Table as GrommetTable } from '../grommet/Table';


const StyledTable = styled(GrommetTable)`
  width: 100%;
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
