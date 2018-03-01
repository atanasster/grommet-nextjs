import React, { Component } from 'react';
import { StyledTableComponent } from '../StyledTable';
import ReactTableDOM from '../ReactTableDOM';

export default class TableComponent extends Component {
  onKeyDown = (event) => {
    let handled;
    switch (event.key) {
      case 'PageUp': {
        const dom = new ReactTableDOM(this);
        handled = dom.previousPage();
        break;
      }
      case 'PageDown': {
        const dom = new ReactTableDOM(this);
        handled = dom.nextPage();
        break;
      }
      case 'Home': {
        const dom = new ReactTableDOM(this);
        handled = dom.firstPage();
        break;
      }
      case 'End': {
        const dom = new ReactTableDOM(this);
        handled = dom.lastPage();
        break;
      }
      case 'ArrowRight':
      case 'ArrowLeft': {
        const dom = new ReactTableDOM(this);
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

  render() {
    return (
      <StyledTableComponent
        onKeyDown={this.onKeyDown}
        role='grid'
        {...this.props}
      />
    );
  }
}

