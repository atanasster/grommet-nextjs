import React, { Component } from 'react';
import styled from 'styled-components';
import { Box, Button } from 'grommet';
import ReactTable from './react-table/ReactTable';
import ReactTableDOM from './ReactTableDOM';


class GrommetTable extends Component {
  onKeyDown = (event) => {
    let handled;
    switch (event.key) {
      case 'PageUp': {
        const dom = new ReactTableDOM(this.tableRef);
        handled = dom.previousPage();
        break;
      }
      case 'PageDown': {
        const dom = new ReactTableDOM(this.tableRef);
        handled = dom.nextPage();
        break;
      }
      case 'Home': {
        const dom = new ReactTableDOM(this.tableRef);
        handled = dom.firstPage();
        break;
      }
      case 'End': {
        const dom = new ReactTableDOM(this.tableRef);
        handled = dom.lastPage();
        break;
      }
      case 'ArrowRight':
      case 'ArrowLeft': {
        const dom = new ReactTableDOM(this.tableRef);
        handled = event.key === 'ArrowRight' ? dom.focusNextCell() : dom.focusPreviousCell();
        break;
      }
      case 'ArrowDown':
      case 'ArrowUp': {
        const dom = new ReactTableDOM(this.tableRef);
        handled = event.key === 'ArrowDown' ? dom.focusNextRow() : dom.focusPreviousRow();
        break;
      }
      default:
        handled = false;
    }
    if (handled) {
      event.preventDefault();
      return false;
    }
    return true;
  };


  getTableProps = () => ({ onKeyDown: this.onKeyDown });

  render() {
    return (
      <ReactTable
        // eslint-disable-next-line no-return-assign
        ref={ref => this.tableRef = ref}
        getTableProps={this.getTableProps}
        {...this.props}
      />
    );
  }
}

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
  ${props => props.tableContext === 'body' && `border-bottom: 1px solid ${props.theme.global.colors.border};`}
`;

export const StyledTrComponent = styled(Box)`
  ${props => props.tableContext === 'header' && `border-bottom: 1px solid ${props.theme.global.colors.border};`}
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
  left: -2px;
  color: transparent;
  cursor: pointer;
`;


export const StyledTfootComponent = styled(Box)`
`;

const StyledTable = styled(GrommetTable)`
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  color: ${props =>
    (props.grommet && props.grommet.dark ? props.theme.global.colors.darkBackground.text
      : (props.theme.grommettable && props.theme.grommettable.color))};

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