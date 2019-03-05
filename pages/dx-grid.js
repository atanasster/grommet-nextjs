import React from 'react';
import { Box, Heading, Text } from 'grommet';
import {
  FilteringState,
  IntegratedFiltering,
  SortingState,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
  SearchState,
  IntegratedSelection,
  SelectionState,
  RowDetailState,
} from '@devexpress/dx-react-grid';

import {
  DragDropProvider,
  Grid,
  Table,
  TableColumnReordering,
  TableColumnResizing,
  TableFilterRow,
  TableHeaderRow,
  ColumnChooser,
  TableColumnVisibility,
  Toolbar,
  PagingPanel,
  SearchPanel,
  TableSelection,
  TableRowDetail,
  TableFixedColumns,
  TableBandHeader,
} from '../components/dx-react-grid-grommet/src';

import Page from '../components/app/Page';

const RowDetail = ({ row }) => (
  <Box background='light-1' fill={true} pad='medium' gap='medium'>
    <Heading level={3} margin='none'>
      {`Details for ${row.name} `}
    </Heading>
    <Text>
      {`from ${row.city}`}
    </Text>
  </Box>
);

const columnBands = [
  {
    title: 'Personal Data',
    children: [
      { columnName: 'name' },
      { columnName: 'sex' },
    ],
  },
];

export default class DXGrid extends React.Component {
  state = {
    columns: [
      { name: 'car', title: 'Car' },
      { name: 'name', title: 'Name' },
      { name: 'sex', title: 'Sex' },
      { name: 'city', title: 'City' },
    ],
    rows: [
      {
        sex: 'Female', name: 'Sandra', city: 'Las Vegas', car: 'Audi A4',
      },
      {
        sex: 'Male', name: 'Paul', city: 'Paris', car: 'Nissan Altima',
      },
      {
        sex: 'Male', name: 'Mark', city: 'Paris', car: 'Honda Accord',
      },
      {
        sex: 'Male', name: 'Paul', city: 'Paris', car: 'Nissan Altima',
      },
      {
        sex: 'Female', name: 'Linda', city: 'Austin', car: 'Toyota Corolla',
      },
      {
        sex: 'Male',
        name: 'Robert',
        city: 'Las Vegas',
        car: 'Chevrolet Cruze',
      },
      {
        sex: 'Female', name: 'Lisa', city: 'London', car: 'BMW 750',
      },
      {
        sex: 'Male', name: 'Mark', city: 'Chicago', car: 'Toyota Corolla',
      },
      {
        sex: 'Male',
        name: 'Thomas',
        city: 'Rio de Janeiro',
        car: 'Honda Accord',
      },
      {
        sex: 'Male', name: 'Robert', city: 'Las Vegas', car: 'Honda Civic',
      },
      {
        sex: 'Female', name: 'Betty', city: 'Paris', car: 'Honda Civic',
      },
      {
        sex: 'Male',
        name: 'Robert',
        city: 'Los Angeles',
        car: 'Honda Accord',
      },
      {
        sex: 'Male',
        name: 'William',
        city: 'Los Angeles',
        car: 'Honda Civic',
      },
      {
        sex: 'Male', name: 'Mark', city: 'Austin', car: 'Nissan Altima',
      },
    ],
    columnWidths: [
      { columnName: 'car', width: 240 },
      { columnName: 'name', width: 180 },
      { columnName: 'sex', width: 180 },
      { columnName: 'city', width: 180 },
    ],
    tableColumnExtensions: [
      {},
    ],
    columnOrder: ['car', 'name', 'sex', 'city'],
    hiddenColumnNames: [],
    currentPage: 0,
    pageSize: 5,
    pageSizes: [5, 10, 15],
    searchValue: '',
    selection: [1],
    expandedRowIds: [],
  };

  changeColumnOrder = newOrder => this.setState({ columnOrder: newOrder });

  changeColumnWidths = columnWidths => this.setState({ columnWidths });

  hiddenColumnNamesChange = hiddenColumnNames => this.setState({ hiddenColumnNames });

  changeCurrentPage = currentPage => this.setState({ currentPage });

  changePageSize = pageSize => this.setState({ pageSize });

  changeSearchValue = value => this.setState({ searchValue: value });

  changeSelection = selection => this.setState({ selection });

  changeExpandedDetails = expandedRowIds => this.setState({ expandedRowIds });

  render() {
    const {
      rows, columns, tableColumnExtensions, columnOrder, columnWidths,
      hiddenColumnNames, pageSize, pageSizes, currentPage, searchValue,
      selection, expandedRowIds,
    } = this.state;
    return (
      <Page title='devex react grid'>
        <Box pad='large'>
          <Heading level={1}>
            <strong>DevEx Reactive Grid</strong>
          </Heading>
          <Grid rows={rows} columns={columns}>
            <RowDetailState
              expandedRowIds={expandedRowIds}
              onExpandedRowIdsChange={this.changeExpandedDetails}
            />
            <DragDropProvider />
            <SortingState />
            <IntegratedSorting />
            <SearchState
              value={searchValue}
              onValueChange={this.changeSearchValue}
            />
            <FilteringState defaultFiltering={[]} />
            <IntegratedFiltering />
            <PagingState
              currentPage={currentPage}
              onCurrentPageChange={this.changeCurrentPage}
              pageSize={pageSize}
              onPageSizeChange={this.changePageSize}
            />
            <IntegratedPaging />
            <SelectionState
              selection={selection}
              onSelectionChange={this.changeSelection}
            />
            <IntegratedSelection />
            <Table
              columnExtensions={tableColumnExtensions}
            />
            <TableColumnResizing
              columnWidths={columnWidths}
              onColumnWidthsChange={this.changeColumnWidths}
            />
            <TableColumnReordering
              order={columnOrder}
              onOrderChange={this.changeColumnOrder}
            />
            <TableHeaderRow showSortingControls={true} />
            <TableSelection
              selectByRowClick
              highlightRow
              showSelectAll
              showSelectionColumn={true}
            />
            <TableColumnVisibility
              hiddenColumnNames={hiddenColumnNames}
              onHiddenColumnNamesChange={this.hiddenColumnNamesChange}
            />
            <TableBandHeader
              columnBands={columnBands}
            />
            <Toolbar />
            <SearchPanel />
            <ColumnChooser />
            <TableFilterRow
              showFilterSelector
            />
            <TableRowDetail
              contentComponent={RowDetail}
            />
            <TableFixedColumns
              leftColumns={['car']}
            />
            <PagingPanel
              pageSizes={pageSizes}
            />
          </Grid>
        </Box>
      </Page>
    );
  }
}
