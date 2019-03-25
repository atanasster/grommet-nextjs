/*
import React from 'react';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
} from 'dx-react-grid-grommet';
*/

const getRowId = row => row.id;

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: Array.from({ length: 10000 })
        .map((item, index) => ({ name: `${index}`, title: `Column ${index}`, getCellValue: row => `[${row.id};${index}]` })),
      rows: Array.from({ length: 10000 })
        .map((item, index) => ({ id: index })),
    };
  }

  render() {
    const { rows, columns } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
      >
        <VirtualTable />
        <TableHeaderRow />
      </Grid>
    );
  }
}

render(<Demo />);
