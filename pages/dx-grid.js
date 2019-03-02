import React from 'react';
import { Box, Heading } from 'grommet';
import {
  FilteringState,
  IntegratedFiltering,
  SortingState,
  IntegratedSorting,
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
} from '../components/dx-react-grid-grommet/src';

import Page from '../components/app/Page';


export default class DXGrid extends React.Component {
  state = {
    columns: [
      { name: 'name', title: 'Name' },
      { name: 'sex', title: 'Sex' },
      { name: 'city', title: 'City' },
      { name: 'car', title: 'Car' },
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
      { columnName: 'name', width: 180 },
      { columnName: 'sex', width: 180 },
      { columnName: 'city', width: 180 },
      { columnName: 'car', width: 240 },
    ],
    tableColumnExtensions: [
      { columnName: 'sex', width: 100 },
    ],
    columnOrder: ['city', 'sex', 'car', 'name'],
    hiddenColumnNames: [],
  };

  changeColumnOrder = (newOrder) => {
    this.setState({ columnOrder: newOrder });
  };
  changeColumnWidths = (columnWidths) => {
    this.setState({ columnWidths });
  };


  hiddenColumnNamesChange = (hiddenColumnNames) => {
    this.setState({ hiddenColumnNames });
  };

  render() {
    const {
      rows, columns, tableColumnExtensions, columnOrder, columnWidths, hiddenColumnNames,
    } = this.state;
    return (
      <Page title='devex react grid'>
        <Box pad='large'>
          <Heading level={1}>
            <strong>DevEx Reactive Grid</strong>
          </Heading>
          <Grid rows={rows} columns={columns}>
            <DragDropProvider />
            <SortingState />
            <IntegratedSorting />
            <FilteringState defaultFiltering={[]} />
            <IntegratedFiltering />
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
            <TableColumnVisibility
              hiddenColumnNames={hiddenColumnNames}
              onHiddenColumnNamesChange={this.hiddenColumnNamesChange}
            />
            <Toolbar />
            <ColumnChooser />
            <TableFilterRow />

          </Grid>
        </Box>
      </Page>
    );
  }
}
