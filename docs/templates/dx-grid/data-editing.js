/* import React from 'react';
import {
  SortingState, EditingState, PagingState, SummaryState,
  IntegratedPaging, IntegratedSorting, IntegratedSummary,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table, TableHeaderRow, TableEditRow, TableEditColumn,
  PagingPanel, DragDropProvider, TableColumnReordering,
  TableFixedColumns, TableSummaryRow,
} from 'dx-react-grid-grommet';
import { TableCell } from 'dx-react-grid-grommet/grommet';
import { NumberInput } from 'grommet-controls';
import { Button, Meter, Select, Menu } from 'grommet';
import { Trash, Edit, Checkmark, Close } from 'grommet-icons';
import {
  generateRows,
  globalSalesValues,
} from '../../../data/dx-grid-data/generator';
*/

const ProgressBarCell = ({ value, style }) => {
  const percent = value * 100;
  return (
    <TableCell
      style={style}
    >
      <Meter
        values={[{ value: percent }]}
        a11yTitle={`${percent.toFixed(1)}%`}
      />
    </TableCell>
  );
};

const HighlightedCell = ({
  tableColumn, value, children, style,
}) => {
  const getColor = (amount) => {
  if (amount < 3000) {
    return '#F44336';
  }
  if (amount < 5000) {
    return '#FFC107';
  }
  if (amount < 8000) {
    return '#FF5722';
  }
  return '#009688';
};

  return (
    <TableCell
      style={{
        color: getColor(value),
        textAlign: tableColumn.align,
        ...style,
      }}
    >
      {children}
    </TableCell>
  );
};

const getInputValue = value => (value === undefined ? '' : value);

const CurrencyEditor = ({ value, onValueChange, classes }) => {
  const handleChange = (event) => {
    const { value: targetValue } = event.target;
    if (targetValue.trim() === '') {
      onValueChange();
      return;
    }
    onValueChange(parseInt(targetValue, 10));
  };
  return (
    <NumberInput
      plain
      value={getInputValue(value)}
      min={0}
      placeholder='Filter...'
      onChange={handleChange}
    />
  );
};


const CurrencyFormatter = ({ value }) => `$${value}`;

const numericFilterOperations = [
  'equal', 'notEqual',
  'greaterThan', 'greaterThanOrEqual',
  'lessThan', 'lessThanOrEqual',
];

const CurrencyTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={CurrencyFormatter}
    editorComponent={CurrencyEditor}
    availableFilterOperations={numericFilterOperations}
    {...props}
  />
);

const getPercentInputValue = value => (value === undefined ? '' : (value * 100).toFixed(1));

const PercentFormatter = ({ value }) => `${getPercentInputValue(value)}%`;

const PercentEditor = ({ value, onValueChange, classes }) => {
  const handleChange = (event) => {
    const { value: targetValue } = event.target;
    if (targetValue === '') {
      onValueChange();
      return;
    }
    onValueChange(Math.min(Math.max(parseFloat(targetValue / 100), 0), 1));
  };
  return (
    <NumberInput
      plain
      value={getPercentInputValue(value)}
      step={0.1}
      min={0}
      max={100}
      placeholder='Filter...'
      onChange={handleChange}
    />
  );
};


const PercentTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={PercentFormatter}
    editorComponent={PercentEditor}
    availableFilterOperations={numericFilterOperations}
    {...props}
  />
);


const AddButton = ({ onExecute }) => (
  <Button
    primary={true}
    onClick={onExecute}
    a11yTitle='Create new row'
    label='New'
  />
);

const EditButton = ({ onExecute }) => (
  <Button onClick={onExecute} a11yTitle='Edit row' icon={<Icons.Edit />} />
);

const DeleteButton = ({ onExecute }) => (
  <Button
    onClick={() => {
      // eslint-disable-next-line
      if (window.confirm('Are you sure you want to delete this row?')) {
        onExecute();
      }
    }}
    a11yTitle='Delete row'
    icon={<Icons.Trash />}
  />
);

const CommitButton = ({ onExecute }) => (
  <Button onClick={onExecute} a11yTitle='Save changes' icon={<Icons.Checkmark />} />
);

const CancelButton = ({ onExecute }) => (
  <Button onClick={onExecute} a11yTitle='Cancel changes' icon={<Icons.Close />} />
);

const commandComponents = {
  add: AddButton,
  edit: EditButton,
  delete: DeleteButton,
  commit: CommitButton,
  cancel: CancelButton,
};

const Command = ({ id, onExecute }) => {
  const CommandButton = commandComponents[id];
  return (
    <CommandButton
      onExecute={onExecute}
    />
  );
};

const availableValues = {
  product: globalSalesValues.product,
  region: globalSalesValues.region,
  customer: globalSalesValues.customer,
};

const LookupEditCell = ({
  availableColumnValues, value, onValueChange,
}) => (
  <TableCell>
    <Select
      plain
      value={value}
      onChange={event => onValueChange(event.value)}
      options={availableColumnValues}
    />
  </TableCell>
);

const Cell = (props) => {
  const { column } = props;
  if (column.name === 'discount') {
    return <ProgressBarCell {...props} />;
  }
  if (column.name === 'amount') {
    return <HighlightedCell {...props} />;
  }
  return <Table.Cell {...props} />;
};

const EditCell = (props) => {
  const { column } = props;
  const availableColumnValues = availableValues[column.name];
  if (availableColumnValues) {
    return <LookupEditCell {...props} availableColumnValues={availableColumnValues} />;
  }
  return <TableEditRow.Cell {...props} />;
};

const getRowId = row => row.id;

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'product', title: 'Product' },
        { name: 'region', title: 'Region' },
        { name: 'amount', title: 'Sale Amount' },
        { name: 'discount', title: 'Discount' },
        { name: 'saleDate', title: 'Sale Date' },
        { name: 'customer', title: 'Customer' },
      ],
      tableColumnExtensions: [
        { columnName: 'product' },
        { columnName: 'region' },
        { columnName: 'amount',  align: 'right' },
        { columnName: 'discount', align: 'right' },
        { columnName: 'saleDate' },
        { columnName: 'customer' },
      ],
      rows: generateRows({
        columnValues: { id: ({ index }) => index, ...globalSalesValues },
        length: 12,
      }),
      sorting: [],
      editingRowIds: [],
      addedRows: [],
      rowChanges: {},
      currentPage: 0,
      pageSize: 0,
      pageSizes: [5, 10, 0],
      columnOrder: ['product', 'region', 'amount', 'discount', 'saleDate', 'customer'],
      currencyColumns: ['amount'],
      percentColumns: ['discount'],
      leftFixedColumns: [TableEditColumn.COLUMN_TYPE],
      totalSummaryItems: [
        { columnName: 'discount', type: 'avg' },
        { columnName: 'amount', type: 'sum' },
      ],
    };
    const getStateRows = () => {
      const { rows } = this.state;
      return rows;
    };

    this.changeSorting = sorting => this.setState({ sorting });
    this.changeEditingRowIds = editingRowIds => this.setState({ editingRowIds });
    this.changeAddedRows = addedRows => this.setState({
      addedRows: addedRows.map(row => (Object.keys(row).length ? row : {
        amount: 0,
        discount: 0,
        saleDate: new Date().toISOString().split('T')[0],
        product: availableValues.product[0],
        region: availableValues.region[0],
        customer: availableValues.customer[0],
      })),
    });
    this.changeRowChanges = rowChanges => this.setState({ rowChanges });
    this.changeCurrentPage = currentPage => this.setState({ currentPage });
    this.changePageSize = pageSize => this.setState({ pageSize });
    this.commitChanges = ({ added, changed, deleted }) => {
      let { rows } = this.state;
      if (added) {
        const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
        rows = [
          ...rows,
          ...added.map((row, index) => ({
            id: startingAddedId + index,
            ...row,
          })),
        ];
      }
      if (changed) {
        rows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
      }
      if (deleted) {
        rows = this.deleteRows(deleted);
      }
      this.setState({ rows });
    };
    this.deleteRows = (deletedIds) => {
      const rows = getStateRows().slice();
      deletedIds.forEach((rowId) => {
        const index = rows.findIndex(row => row.id === rowId);
        if (index > -1) {
          rows.splice(index, 1);
        }
      });
      return rows;
    };
    this.changeColumnOrder = (order) => {
      this.setState({ columnOrder: order });
    };
  }

  render() {
    const {
      rows,
      columns,
      tableColumnExtensions,
      sorting,
      editingRowIds,
      addedRows,
      rowChanges,
      currentPage,
      pageSize,
      pageSizes,
      columnOrder,
      currencyColumns,
      percentColumns,
      leftFixedColumns,
      totalSummaryItems,
    } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
      >
        <SortingState
          sorting={sorting}
          onSortingChange={this.changeSorting}
        />
        <PagingState
          currentPage={currentPage}
          onCurrentPageChange={this.changeCurrentPage}
          pageSize={pageSize}
          onPageSizeChange={this.changePageSize}
        />
        <EditingState
          editingRowIds={editingRowIds}
          onEditingRowIdsChange={this.changeEditingRowIds}
          rowChanges={rowChanges}
          onRowChangesChange={this.changeRowChanges}
          addedRows={addedRows}
          onAddedRowsChange={this.changeAddedRows}
          onCommitChanges={this.commitChanges}
        />
        <SummaryState
          totalItems={totalSummaryItems}
        />

        <IntegratedSorting />
        <IntegratedPaging />
        <IntegratedSummary />

        <CurrencyTypeProvider for={currencyColumns} />
        <PercentTypeProvider for={percentColumns} />

        <DragDropProvider />

        <Table
          columnExtensions={tableColumnExtensions}
          cellComponent={Cell}
        />
        <TableColumnReordering
          order={columnOrder}
          onOrderChange={this.changeColumnOrder}
        />
        <TableHeaderRow showSortingControls />
        <TableEditRow
          cellComponent={EditCell}
        />
        <TableEditColumn
          width={170}
          showAddCommand={!addedRows.length}
          showEditCommand
          showDeleteCommand
          commandComponent={Command}
        />
        <TableSummaryRow />
        <TableFixedColumns
          leftColumns={leftFixedColumns}
        />
        <PagingPanel
          pageSizes={pageSizes}
        />
      </Grid>
    );
  }
}

render(<Demo />);
