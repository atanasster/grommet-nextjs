import React from 'react';
import { Box, Heading } from 'grommet';
import {
  FilteringState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';

import { Grid, Table, TableFilterRow, TableHeaderRow } from '../components/dx-react-grid-grommet/src';

import Page from '../components/app/Page';

const columns = [
  { name: 'name', title: 'Name' },
  { name: 'sex', title: 'Sex' },
  { name: 'city', title: 'City' },
  { name: 'car', title: 'Car' },
];
const rows = [
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
];

export default () => (
  <Page title='devex react grid'>
    <Box pad='large'>
      <Heading level={1}>
        <strong>DevEx Reactive Grid</strong>
      </Heading>
      <Grid rows={rows} columns={columns}>
        <FilteringState defaultFiltering={[]} />
        <IntegratedFiltering />
        <Table />
        <TableHeaderRow />
        <TableFilterRow />
      </Grid>
    </Box>
  </Page>
);
