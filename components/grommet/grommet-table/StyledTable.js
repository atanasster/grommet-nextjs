import React, { Component } from 'react';
import styled from 'styled-components';
import ReactTable from 'react-table';
import { Box } from 'grommet';
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

export const StyledTableHeaderComponent = styled(Box)`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &.-filters {
    border-bottom: ${props => (`1px solid ${props.theme.global.colors.border}`)};
  }
`;

export const StyledThComponent = styled(Box)`
  position: relative;
  font-weight:${props => (props.theme.grommettable && props.theme.grommettable.th && props.theme.grommettable && props.theme.grommettable.th.fontWeight) || 300};
  font-size:${props => (props.theme.grommettable && props.theme.grommettable.th && props.theme.grommettable && props.theme.grommettable.th.fontSize) || '1.2em'};
  &.-cursor-pointer {
    cursor: pointer;
  }
  &.rt-resizable-header {
    overflow: visible;
  }

  &.rt-resizable-header:last-child {
    overflow: hidden
  }

  &.rt-resizable-header-content {
    overflow: hidden;
    text-overflow: ellipsis
  }
  &:last-child {
    border-right: 0
  }

  color: ${props =>
    (props.grommet && props.grommet.dark ? props.theme.global.colors.darkBackground.text
      : (props.theme.grommettable && props.theme.grommettable.th.color))};  
`;


export const StyledTrComponent = styled(Box)`
  ${props => props.tableContext === 'header' && `border-bottom: 1px solid ${props.theme.global.colors.border};`}
`;


export const StyledTdComponent = styled(Box)`
  text-overflow: ellipsis;
  overflow: hidden;
  display:  block; 
`;

const StyledTable = styled(GrommetTable)`
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  color: ${props =>
    (props.grommet && props.grommet.dark ? props.theme.global.colors.darkBackground.text
      : (props.theme.grommettable && props.theme.grommettable.color))};
  
  & .rt-thead.-headerGroups {
    font-weight: 500;
  }

  & .rt-thead.-filters input, .rt-thead.-filters select {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 5px 7px;
    font-size: inherit;
    border-radius: 3px;
    font-weight: normal;
    outline: none;
  }

  & .rt-thead.-filters .rt-th {
    border-right: 1px solid rgba(0, 0, 0, 0.02);
  }

  & .rt-thead .rt-header-pivot {
    border-right-color: #f7f7f7
  }

  & .rt-thead .rt-header-pivot:after, .rt-thead .rt-header-pivot:before {
    left: 100%;
    top: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none
  }

  & .rt-thead .rt-header-pivot:after {
    border-color: rgba(255, 255, 255, 0);
    border-left-color: #fff;
    border-width: 8px;
    margin-top: -8px
  }

  & .rt-thead .rt-header-pivot:before {
    border-color: rgba(102, 102, 102, 0);
    border-left-color: #f7f7f7;
    border-width: 10px;
    margin-top: -10px
  }

  & .rt-tbody .rt-tr-group {
    border-bottom: solid 1px rgba(0, 0, 0, 0.05);
  }

  & .rt-tbody .rt-tr-group:last-child {
    border-bottom: 0
  }

  & .rt-tbody .rt-td {
    text-align: left;
    padding: 10px;
  }

  & .rt-tbody .rt-td:last-child {
    border-right: 0
  }

  & .rt-tbody .rt-expandable {
    cursor: pointer
  }

  & .rt-tr-group {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch
  }

  & .rt-tr {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    align-items: center;
  }

  & .rt-th, .rt-td {
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 7px 5px;
    overflow: hidden;
  }

  & .rt-th.-hidden, .rt-td.-hidden {
    width: 0 !important;
    min-width: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    opacity: 0 !important
  }

  & .rt-expander {
    display: inline-block;
    position: relative;
    margin: 0;
    color: transparent;
    margin: 0 10px;
  }

  & .rt-expander:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%) rotate(-90deg);
    transform: translate(-50%, -50%) rotate(-90deg);
    border-left: 5.04px solid transparent;
    border-right: 5.04px solid transparent;
    border-top: 7px solid rgba(0, 0, 0, 0.8);
    transition: all .3s cubic-bezier(.175, .885, .32, 1.275);
    cursor: pointer
  }

  & .rt-expander.-open:after {
    -webkit-transform: translate(-50%, -50%) rotate(0);
    transform: translate(-50%, -50%) rotate(0)
  }

  & .rt-resizer {
    display: inline-block;
    position: absolute;
    width: 36px;
    top: 0;
    bottom: 0;
    right: -18px;
    cursor: col-resize;
    z-index: 10
  }

  & .rt-tfoot {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  & .rt-tfoot .rt-td {
    border-right: 1px solid rgba(0, 0, 0, 0.05);
  }

  & .rt-tfoot .rt-td:last-child {
    border-right: 0
  }

  &.-striped .rt-tr.-odd {
    background: rgba(0, 0, 0, 0.03)
  }

  &.-highlight .rt-tbody .rt-tr:not(.-padRow):hover {
    background: rgba(0, 0, 0, 0.05)
  }

  & .-loading {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    transition: all .3s ease;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
  }

  & .-loading > div {
    position: absolute;
    display: block;
    text-align: center;
    width: 100%;
    top: 50%;
    left: 0;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
    -webkit-transform: translateY(-52%);
    transform: translateY(-52%);
    transition: all .3s cubic-bezier(.25, .46, .45, .94)
  }

  & .-loading.-active {
    opacity: 1;
    z-index: 2;
    pointer-events: all;
  }

  & .-loading.-active > div {
    -webkit-transform: translateY(50%);
    transform: translateY(50%)
  }

  & .rt-resizing .rt-th, .rt-resizing .rt-td {
    transition: none !important;
    cursor: col-resize;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
  }

`;

export default StyledTable.extend`
  ${props => (props.theme.grommettable ? props.theme.grommettable.extend : {})}
`;
