import { withComponents } from '@devexpress/dx-react-core';
import { TableFilterRow as TableFilterRowBase } from '@devexpress/dx-react-grid';
import { TableFilterCell as Cell } from '../templates/table-filter/cell';
import { TableFilterRow as Row } from '../templates/table-filter/row';
import { Editor } from '../templates/table-filter/editor';
import { FilterSelector } from '../templates/table-filter/filter-selector';
import { ToggleButton } from '../templates/table-filter/filter-selector/toggle-button';
import { Icon } from '../templates/table-filter/icon';


export const TableFilterRow = withComponents({
  Row, Cell, Editor, FilterSelector, Icon, ToggleButton,
})(TableFilterRowBase);

TableFilterRow.ROW_TYPE = TableFilterRowBase.ROW_TYPE;
