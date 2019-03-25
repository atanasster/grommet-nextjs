/*
import React from 'react';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFixedColumns,
  TableBandHeader,
} from 'dx-react-grid-grommet';

import {
  generateRows,
  employeeValues,
} from '../../../data/dx-grid-data/generator';
*/

const columns = [
  { name: 'prefix', title: 'Title' },
  { name: 'firstName', title: 'First Name' },
  { name: 'lastName', title: 'Last Name' },
  { name: 'birthDate', title: 'Birth Date' },
  { name: 'position', title: 'Position' },
  { name: 'state', title: 'State' },
  { name: 'phone', title: 'Phone' },
];
const columnBands = [
  {
    title: 'Personal Data',
    children: [
      { columnName: 'prefix' },
      {
        title: 'Full Name',
        children: [
          { columnName: 'firstName' },
          { columnName: 'lastName' },
        ],
      },
      { columnName: 'birthDate' },
    ],
  },
  {
    title: 'Work Information',
    children: [
      { columnName: 'state' },
      { columnName: 'position' },
      { columnName: 'phone' },
    ],
  },
];
const leftColumns = ['prefix', 'firstName'];
const rows = generateRows({
  columnValues: employeeValues,
  length: 8,
});
const tableColumnExtensions = [
  { columnName: 'prefix', width: 80 },
  { columnName: 'firstName', width: 220 },
  { columnName: 'lastName', width: 220 },
  { columnName: 'phone', width: 140 },
];

const Demo = () => (
  <Grid
    rows={rows}
    columns={columns}
  >
    <Table
      columnExtensions={tableColumnExtensions}
    />
    <TableHeaderRow />
    <TableBandHeader
      columnBands={columnBands}
    />
    <TableFixedColumns
      leftColumns={leftColumns}
    />
  </Grid>
);

render(<Demo />);
