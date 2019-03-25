/*
import React from 'react';
import {
  Grid,
  Table,
  TableHeaderRow,
} from 'dx-react-grid-grommet';

import {
  generateRows,
  defaultNestedColumnValues,
} from '../../../data/dx-grid-data/generator';
*/

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          name: 'firstName',
          title: 'First Name',
          getCellValue: row => (row.user ? row.user.firstName : undefined),
        },
        {
          name: 'lastName',
          title: 'Last Name',
          getCellValue: row => (row.user ? row.user.lastName : undefined),
        },
        {
          name: 'car',
          title: 'Car',
          getCellValue: row => (row.car ? row.car.model : undefined),
        },
        { name: 'position', title: 'Position' },
        { name: 'city', title: 'City' },
      ],
      rows: generateRows({
        columnValues: { id: ({ index }) => index, ...defaultNestedColumnValues },
        length: 8,
      }),
    };
  }

  render() {
    const { rows, columns } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <Table />
        <TableHeaderRow />
      </Grid>
    );
  }
}

render(<Demo />);
