/*
import React from 'react';
import {
  FilteringState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
} from 'dx-react-grid-grommet';

import { generateRows } from '../../../data/dx-grid-data/generator';
*/

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'car', title: 'Car' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
      ],
      rows: generateRows({ length: 8 }),
      defaultFilters: [{ columnName: 'car', value: 'cruze' }],
      filteringStateColumnExtensions: [
        { columnName: 'name', filteringEnabled: false },
        { columnName: 'car', filteringEnabled: false },
      ],
    };
  }

  render() {
    const {
      rows,
      columns,
      defaultFilters,
      filteringStateColumnExtensions,
    } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <FilteringState
          defaultFilters={defaultFilters}
          columnExtensions={filteringStateColumnExtensions}
        />
        <IntegratedFiltering />
        <Table />
        <TableHeaderRow />
        <TableFilterRow />
      </Grid>
    );
  }
}

render(<Demo />);
