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

const toLowerCase = value => String(value).toLowerCase();
const cityPredicate = (value, filter) => toLowerCase(value).startsWith(toLowerCase(filter.value));

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ],
      integratedFilteringColumnExtensions: [
        { columnName: 'city', predicate: cityPredicate },
      ],
      rows: generateRows({ length: 8 }),
    };
  }

  render() {
    const { rows, columns, integratedFilteringColumnExtensions } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <FilteringState defaultFilters={[{ columnName: 'city', value: 'Paris' }]} />
        <IntegratedFiltering columnExtensions={integratedFilteringColumnExtensions} />
        <Table />
        <TableHeaderRow />
        <TableFilterRow />
      </Grid>
    );
  }
}

render(<Demo />);
