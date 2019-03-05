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
  SummaryState,
  CustomSummary,
  IntegratedSummary,
  DataTypeProvider,
  GroupingState,
  IntegratedGrouping,
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
  TableSummaryRow,
  TableGroupRow,
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

const CurrencyFormatter = ({ value }) => `$${value}`;

const CurrencyTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={CurrencyFormatter}
    {...props}
  />
);

const GroupCellContent = ({ column, row }) => (
  <Box direction='row' gap='small' as='span'>
    Group
    <Text weight='bold'>
      {column.title}
    </Text>
    by first letter:
    <Text weight='bold'>
      {row.value}
    </Text>
  </Box>
);

const cityGroupCriteria = value => ({ key: value.substr(0, 1) });

export default class DXGrid extends React.Component {
  state = {
    columns: [
      { name: 'car', title: 'Car' },
      { name: 'name', title: 'Name' },
      { name: 'sex', title: 'Sex' },
      { name: 'city', title: 'City' },
      { name: 'amount', title: 'Price' },
    ],
    rows: [
      {
        sex: 'Female', name: 'Sandra', city: 'Las Vegas', car: 'Audi A4', amount: 35000,
      },
      {
        sex: 'Male', name: 'Paul', city: 'Paris', car: 'Nissan Altima', amount: 21000,
      },
      {
        sex: 'Male', name: 'Mark', city: 'Paris', car: 'Honda Accord', amount: 15600,
      },
      {
        sex: 'Male', name: 'Paul', city: 'Paris', car: 'Nissan Altima', amount: 22500,
      },
      {
        sex: 'Female', name: 'Linda', city: 'Austin', car: 'Toyota Corolla', amount: 13400,
      },
      {
        sex: 'Male',
        name: 'Robert',
        city: 'Las Vegas',
        car: 'Chevrolet Cruze',
        amount: 18300,
      },
      {
        sex: 'Female', name: 'Lisa', city: 'London', car: 'BMW 750', amount: 72000,
      },
      {
        sex: 'Male', name: 'Mark', city: 'Chicago', car: 'Toyota Corolla', amount: 13600,

      },
      {
        sex: 'Male',
        name: 'Thomas',
        city: 'Rio de Janeiro',
        car: 'Honda Accord',
        amount: 15200,
      },
      {
        sex: 'Male', name: 'Robert', city: 'Las Vegas', car: 'Honda Civic', amount: 12300,
      },
      {
        sex: 'Female', name: 'Betty', city: 'Paris', car: 'Honda Civic', amount: 12100,
      },
      {
        sex: 'Male',
        name: 'Robert',
        city: 'Los Angeles',
        car: 'Honda Accord',
        amount: 15850,
      },
      {
        sex: 'Male',
        name: 'William',
        city: 'Los Angeles',
        car: 'Honda Civic',
        amount: 12500,
      },
      {
        sex: 'Male', name: 'Mark', city: 'Austin', car: 'Nissan Altima', amount: 21200,
      },
    ],
    columnWidths: [
      { columnName: 'car', width: 240 },
      { columnName: 'name', width: 180 },
      { columnName: 'sex', width: 180 },
      { columnName: 'city', width: 180 },
      { columnName: 'amount', width: 150 },
    ],
    tableColumnExtensions: [
      { columnName: 'amount', align: 'right' },
    ],
    columnOrder: ['car', 'name', 'sex', 'city', 'amount'],
    hiddenColumnNames: [],
    currentPage: 0,
    pageSize: 5,
    pageSizes: [5, 10, 15],
    searchValue: '',
    selection: [1],
    expandedRowIds: [],
    totalSummaryItems: [
      { columnName: 'city', type: 'count' },
      { columnName: 'amount', type: 'max' },
      { columnName: 'amount', type: 'sum' },
    ],
    currencyColumns: ['amount'],
    integratedGroupingColumnExtensions: [
      { columnName: 'city', criteria: cityGroupCriteria },
    ],
    tableGroupColumnExtension: [
      { columnName: 'city', showWhenGrouped: true },
    ],
    grouping: [{ columnName: 'city' }],
  };

  changeColumnOrder = newOrder => this.setState({ columnOrder: newOrder });

  changeColumnWidths = columnWidths => this.setState({ columnWidths });

  hiddenColumnNamesChange = hiddenColumnNames => this.setState({ hiddenColumnNames });

  changeCurrentPage = currentPage => this.setState({ currentPage });

  changePageSize = pageSize => this.setState({ pageSize });

  changeSearchValue = value => this.setState({ searchValue: value });

  changeSelection = selection => this.setState({ selection });

  changeExpandedDetails = expandedRowIds => this.setState({ expandedRowIds });

  getTotalSummaryValues = () => {
    const { selection, rows, totalSummaryItems } = this.state;
    const selectionSet = new Set(selection);
    const selectedRows = rows.filter((row, rowIndex) => selectionSet.has(rowIndex));
    return totalSummaryItems.map((summary) => {
      const { columnName, type } = summary;
      return IntegratedSummary.defaultCalculator(type, selectedRows, row => row[columnName]);
    });
  };

  render() {
    const {
      rows, columns, tableColumnExtensions, columnOrder, columnWidths,
      hiddenColumnNames, pageSize, pageSizes, currentPage, searchValue,
      selection, expandedRowIds, currencyColumns, totalSummaryItems,
      grouping, integratedGroupingColumnExtensions, tableGroupColumnExtension,
    } = this.state;
    return (
      <Page title='devex react grid'>
        <Box pad='large'>
          <Heading level={1}>
            <strong>DevEx Reactive Grid</strong>
          </Heading>
          <Box gap='medium'>
            <Grid rows={rows} columns={columns}>
              <RowDetailState
                expandedRowIds={expandedRowIds}
                onExpandedRowIdsChange={this.changeExpandedDetails}
              />
              <CurrencyTypeProvider
                for={currencyColumns}
              />
              <SummaryState
                totalItems={totalSummaryItems}
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
              <CustomSummary
                totalValues={this.getTotalSummaryValues()}
              />
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
                selectByRowClick={true}
                highlightRow={true}
                showSelectAll={true}
                showSelectionColumn={true}
              />
              <TableColumnVisibility
                hiddenColumnNames={hiddenColumnNames}
                onHiddenColumnNamesChange={this.hiddenColumnNamesChange}
              />
              <Toolbar />
              <SearchPanel />
              <ColumnChooser />
              <TableFilterRow
                showFilterSelector={true}
              />
              <TableSummaryRow />
              <TableRowDetail
                contentComponent={RowDetail}
              />
              <TableBandHeader
                columnBands={columnBands}
              />
              <TableFixedColumns
                leftColumns={['car']}
              />
              <PagingPanel
                pageSizes={pageSizes}
              />
            </Grid>
            <Box>
              <Heading level={3}>
                Grid with grouping
              </Heading>
              <Grid rows={rows} columns={columns}>
                <GroupingState
                  grouping={grouping}
                />
                <IntegratedGrouping
                  columnExtensions={integratedGroupingColumnExtensions}
                />
                <Table />
                <TableHeaderRow />
                <TableGroupRow
                  contentComponent={GroupCellContent}
                  columnExtensions={tableGroupColumnExtension}
                />
              </Grid>
            </Box>
          </Box>
        </Box>
      </Page>
    );
  }
}
