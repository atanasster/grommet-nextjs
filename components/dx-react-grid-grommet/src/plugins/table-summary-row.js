import { withComponents } from '@devexpress/dx-react-core';
import { TableSummaryRow as TableSummaryRowBase } from '@devexpress/dx-react-grid';
import { TableSummaryItem } from '../templates/table-summary/table-summary-item';
import { TableSummaryCell as TableCell } from '../templates/table-summary/cell';
import { TableSummarylRow as TableRow } from '../templates/table-summary/row';
import { TableTreeIndent as Indent } from '../templates/table-tree/indent';
import { TableTreeContent as Content } from '../templates/table-tree/content';
import { TableTreeCell as Cell } from '../templates/table-tree/cell';

export const TableSummaryRow = withComponents({
  TotalRow: TableRow,
  GroupRow: TableRow,
  TreeRow: TableRow,
  TotalCell: TableCell,
  GroupCell: TableCell,
  TreeCell: TableCell,
  TableTreeCell: Cell,
  TableTreeContent: Content,
  TableTreeIndent: Indent,
  Item: TableSummaryItem,
})(TableSummaryRowBase);

TableSummaryRow.TREE_ROW_TYPE = TableSummaryRowBase.TREE_ROW_TYPE;
TableSummaryRow.GROUP_ROW_TYPE = TableSummaryRowBase.GROUP_ROW_TYPE;
TableSummaryRow.TOTAL_ROW_TYPE = TableSummaryRowBase.TOTAL_ROW_TYPE;
