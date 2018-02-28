import { filterByFocusable } from 'grommet/utils/DOM';


function focusNode(nodes, index) {
  if (index >= 0 && index < nodes.length) {
    nodes[index].focus();
    return true;
  }
  return false;
}

function focusableChildren(parent) {
  let list = [];
  if (parent && parent.childNodes) {
    parent.childNodes.forEach((node) => {
      list.push(node);
      list = list.concat(focusableChildren(node));
    });
  }
  return filterByFocusable(list);
}

const rtTr = '.rt-tr';
const rtTrGroup = '.rt-tr-group';

export default class ReactTableDOM {
  constructor(tableref) {
    this.tableRef = tableref;
  }
  get row() {
    if (this.cellDOM === undefined) {
      this.rowDOM = this.cell.closest(rtTrGroup);
      if (this.rowDOM) {
        this.rowTag = rtTrGroup;
      } else {
        this.rowDOM = this.cell.closest(rtTr);
        this.rowTag = rtTr;
      }
    }
    return this.rowDOM;
  }
  get cell() {
    if (this.cellDOM === undefined) {
      this.cellDOM = document.activeElement;
      this.tableDOM = this.cellDOM.closest('.rt-table');
    }
    return this.cellDOM;
  }

  get table() {
    return this.tableDOM;
  }

  changePage(newPage) {
    const { page, pages } = this.tableRef.state;
    if (newPage < pages && newPage !== page && newPage >= 0) {
      this.tableRef.onPageChange(newPage);
      return true;
    }
    return false;
  }

  nextPage() {
    const { page } = this.tableRef.state;
    if (this.changePage(page + 1)) {
      return true;
    }
    return false;
  }

  previousPage() {
    const { page } = this.tableRef.state;
    if (this.changePage(page - 1)) {
      return true;
    }
    return false;
  }

  firstPage() {
    if (this.changePage(0)) {
      return true;
    }
    return false;
  }

  lastPage() {
    const { pages } = this.tableRef.state;
    if (this.changePage(pages - 1)) {
      return true;
    }
    return false;
  }

  currentRow() {
    return focusableChildren(this.row);
  }

  previousRow() {
    if (this.row) {
      if (this.row.previousSibling) {
        return focusableChildren(this.row.previousSibling);
      }
      const { page } = this.tableRef.state;
      if (page > 0) {
        return this.previousPage();
      }
      if (this.rowTag === rtTrGroup) {
        // we are on the first data row.
        return focusableChildren(this.table.querySelector('.-filters').querySelector(rtTr));
      }
    }
    return [];
  }

  nextRow() {
    if (this.row) {
      if (this.row.nextSibling) {
        return focusableChildren(this.row.nextSibling);
      }
      if (this.rowTag === rtTr) {
        // we are in the header
        return focusableChildren(this.table.querySelector(rtTrGroup));
      }
      return this.nextPage();
    }
    return [];
  }

  focusCell(index) {
    let focusable = this.currentRow();
    let newIndex = index;
    if (index >= focusable.length) {
      focusable = this.nextRow();
      newIndex = 0;
    } else if (index < 0) {
      focusable = this.previousRow();
      newIndex = focusable.length - 1;
    }
    return focusNode(focusable, newIndex);
  }
  get cellIndex() {
    if (this.row) {
      const focusable = this.currentRow();
      return focusable.indexOf(this.cell);
    }
    return -1;
  }
  focusNextCell() {
    if (this.row) {
      return this.focusCell(this.cellIndex + 1);
    }
    return false;
  }

  focusPreviousCell() {
    if (this.row) {
      return this.focusCell(this.cellIndex - 1);
    }
    return false;
  }

  focusNextRow() {
    if (this.row) {
      return focusNode(this.nextRow(), this.cellIndex);
    }
    return false;
  }

  focusPreviousRow() {
    if (this.row) {
      return focusNode(this.previousRow(), this.cellIndex);
    }
    return false;
  }
}
