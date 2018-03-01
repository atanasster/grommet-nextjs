import styled from 'styled-components';
import { Box, Button } from 'grommet';
import ReactTable from './react-table/ReactTable';

export const StyledTableComponent = styled(Box)`
  align-items: stretch;
  width: 100%;
  border-collapse: collapse;
  overflow: auto
`;

export const StyledTableBodyComponent = styled(Box)`
`;

export const StyledTHeadComponent = styled(Box)`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${props => props.filters && `
    border-bottom: ${`1px solid ${props.theme.global.colors.border}`};
  `}
  ${props => props.header && `
    font-weight:${(props.theme.grommettable && props.theme.grommettable.th && props.theme.grommettable && props.theme.grommettable.th.fontWeight) || 300};
    font-size:${(props.theme.grommettable && props.theme.grommettable.th && props.theme.grommettable && props.theme.grommettable.th.fontSize) || '1.2em'};
  `}
`;

export const StyledResizerComponent = styled(Box)`
 display: inline-block;
  position: absolute;
  width: 36px;
  top: 0;
  bottom: 0;
  right: -18px;
  cursor: col-resize;
  z-index: 10;
`;

export const StyledThComponent = styled(Box)`
  position: relative;
  ${props => props.sortable && `
    cursor: pointer;
  `}  
  ${props => props.hidden && `
    width: 0 !important;
    min-width: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    opacity: 0 !important;
  `}
  ${props => props.pivot && `
    border-right-color: #f7f7f7;
    &:after,:before {
      left: 100%;
      top: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none
    }
  
    &:after {
      border-color: rgba(255, 255, 255, 0);
      border-left-color: #fff;
      border-width: 8px;
      margin-top: -8px
    }
  
    &:before {
      border-color: rgba(102, 102, 102, 0);
      border-left-color: #f7f7f7;
      border-width: 10px;
      margin-top: -10px
    }

  `}  
  ${props => props.resizable && `
    overflow: visible;

    &:last-child {
      overflow: hidden
    }
  `}  
  color: ${props =>
    (props.grommet && props.grommet.dark ? props.theme.global.colors.darkBackground.text
      : (props.theme.grommettable && props.theme.grommettable.th.color))};  
`;


export const StyledTrGroupComponent = styled(Box)`
  align-items: stretch;
`;

export const StyledTrComponent = styled(Box)`
`;

export const StyledTdComponent = styled(Box)`
  text-overflow: ellipsis;
  overflow: hidden;
  display:  block;
  white-space: nowrap;
  ${props => props.hidden && `
    width: 0 !important;
    min-width: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    opacity: 0 !important
  `}
`;

export const StyledExpander = styled(Button)`
  position: relative;
  margin: 0;
  padding: 0;
  left: -5px;
  color: transparent;
  cursor: pointer;
`;


export const StyledTfootComponent = styled(Box)`
`;

const StyledTable = styled(ReactTable)`
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  &.-striped .rt-tr.-odd {
    background: rgba(0, 0, 0, 0.03)
  }

  &.-highlight .rt-tbody .rt-tr:not(.-padRow):hover {
    background: rgba(0, 0, 0, 0.05)
  }
`;

export default StyledTable.extend`
  ${props => (props.theme.grommettable ? props.theme.grommettable.extend : {})}
`;
