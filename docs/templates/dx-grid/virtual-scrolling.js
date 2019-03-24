/*
import React from 'react';
import {
  SortingState, SelectionState, FilteringState, GroupingState, SearchState,
  IntegratedFiltering, IntegratedGrouping, IntegratedSorting, IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  VirtualTable, TableHeaderRow, TableFilterRow, TableSelection, TableGroupRow,
  GroupingPanel, DragDropProvider, TableColumnReordering, Toolbar, SearchPanel,
} from 'dx-react-grid-grommet';
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

const CurrencyFormatter = ({ value }) => `$${value}`;

const numericFilterOperations = [
  'equal', 'notEqual',
  'greaterThan', 'greaterThanOrEqual',
  'lessThan', 'lessThanOrEqual',
];

const CurrencyTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={CurrencyFormatter}
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
    availableFilterOperations={numericFilterOperations}
    {...props}
  />
);

const BooleanFormatter = ({ value }) => (value ? 'Yes' : 'No');

const BooleanTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={BooleanFormatter}
    {...props}
  />
);

const Cell = (props) => {
  const { column } = props;
  if (column.name === 'discount') {
    return <ProgressBarCell {...props} />;
  }
  if (column.name === 'amount') {
    return <HighlightedCell {...props} />;
  }
  return <VirtualTable.Cell {...props} />;
};

const getRowId = row => row.id;

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'product', title: 'Product' },
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'channel', title: 'Channel' },
        { name: 'amount', title: 'Sale Amount' },
        { name: 'discount', title: 'Discount' },
        { name: 'saleDate', title: 'Sale Date' },
        { name: 'customer', title: 'Customer' },
        { name: 'units', title: 'Units' },
        { name: 'shipped', title: 'Shipped' },
      ],
      tableColumnExtensions: [
        { columnName: 'amount', align: 'right' },
        { columnName: 'units', align: 'right' },
      ],
      rows: generateRows({
        columnValues: { id: ({ index }) => index, ...globalSalesValues },
        length: 200000,
      }),
      currencyColumns: ['amount'],
      percentColumns: ['discount'],
      booleanColumns: ['shipped'],
    };
  }

  render() {
    const {
      rows, columns, tableColumnExtensions,
      currencyColumns, percentColumns, booleanColumns,
    } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
      >
        <DragDropProvider />

        <FilteringState
          defaultFilters={[{ columnName: 'saleDate', value: '2016-02' }]}
        />
        <SearchState />
        <SortingState
          defaultSorting={[
            { columnName: 'product', direction: 'asc' },
            { columnName: 'saleDate', direction: 'asc' },
          ]}
        />
        <GroupingState
          defaultGrouping={[{ columnName: 'product' }]}
          defaultExpandedGroups={['EnviroCare Max']}
        />
        <SelectionState />

        <IntegratedFiltering />
        <IntegratedSorting />
        <IntegratedGrouping />
        <IntegratedSelection />

        <CurrencyTypeProvider for={currencyColumns} />
        <PercentTypeProvider for={percentColumns} />
        <BooleanTypeProvider for={booleanColumns} />

        <VirtualTable
          columnExtensions={tableColumnExtensions}
          cellComponent={Cell}
        />
        <TableHeaderRow showSortingControls />
        <TableColumnReordering defaultOrder={columns.map(column => column.name)} />
        <TableFilterRow showFilterSelector />
        <TableSelection showSelectAll />
        <TableGroupRow />
        <Toolbar />
        <SearchPanel />
        <GroupingPanel showSortingControls />
      </Grid>
    );
  }
}

render(<Demo />);
