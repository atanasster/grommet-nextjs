/*
import React from 'react';
import { NumberInput } from 'grommet-controls';
import {
  Column,
  FilteringState, GroupingState,
  IntegratedFiltering, IntegratedGrouping, IntegratedPaging, IntegratedSelection, IntegratedSorting,
  PagingState, SelectionState, SortingState, DataTypeProvider,
} from '@devexpress/dx-react-grid';
import {
  DragDropProvider,
  Grid, GroupingPanel, PagingPanel,
  Table, TableFilterRow, TableGroupRow,
  TableHeaderRow, TableSelection, Toolbar,
} from 'dx-react-grid-grommet';
import {
  generateRows,
  globalSalesValues,
} from '../../../data/dx-grid-data/generator';
*/

const sales = generateRows({ columnValues: globalSalesValues, length: 1000 });

const availableFilterOperations = [
  'equal', 'notEqual',
  'greaterThan', 'greaterThanOrEqual',
  'lessThan', 'lessThanOrEqual',
];

const getInputValue = (value) =>
  (value === undefined ? '' : value);

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

const CurrencyEditor = ({ onValueChange, classes, value }) => {
  const handleChange = (event) => {
    const { value: targetValue } = event.target;
    if (targetValue.trim() === '') {
      onValueChange(undefined);
      return;
    }
    onValueChange(parseInt(targetValue, 10));
  };
  return (
    <NumberInput
      value={getInputValue(value)}
      min={0}
      placeholder='Filter...'
      onChange={handleChange}
    />
  );
};

const CurrencyFormatter = ({ value }) => (
    <i style={{ color: getColor(value) }}>${value}</i>
);


const CurrencyTypeProvider = (props) => (
    <DataTypeProvider
      formatterComponent={CurrencyFormatter}
      editorComponent={CurrencyEditor}
      availableFilterOperations={availableFilterOperations}
      {...props}
    />
);

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'product', title: 'Product' },
        { name: 'region', title: 'Region' },
        { name: 'amount', title: 'Sale Amount' },
        { name: 'saleDate', title: 'Sale Date' },
        { name: 'customer', title: 'Customer' },
      ],
      currencyColumns: ['amount'],
      pageSizes: [5, 10, 15],
      rows: sales,
    };
  }
  render(){
    const {
      rows, columns, pageSizes,
      currencyColumns,
    } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <FilteringState
          defaultFilters={[{ columnName: 'saleDate', value: '2016-02' }]}
        />
        <SortingState
          defaultSorting={[
            { columnName: 'product', direction: 'asc' },
            { columnName: 'saleDate', direction: 'asc' },
          ]}
        />

        <SelectionState />

        <GroupingState
          defaultGrouping={[{ columnName: 'product' }]}
          defaultExpandedGroups={['EnviroCare Max']}
        />
        <PagingState />

        <IntegratedGrouping />
        <IntegratedFiltering />
        <IntegratedSorting />
        <IntegratedPaging />
        <IntegratedSelection />

        <CurrencyTypeProvider for={currencyColumns} />

        <DragDropProvider />

        <Table />
        <TableSelection showSelectAll={true} />

        <TableHeaderRow showSortingControls={true} />
        <TableFilterRow showFilterSelector={true} />
        <PagingPanel pageSizes={pageSizes} />

        <TableGroupRow />
        <Toolbar />
        <GroupingPanel showSortingControls={true} />
      </Grid>
    );
  }
}

render(<Demo />);
