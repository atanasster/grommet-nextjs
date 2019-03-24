/*
import React from 'react';
import {
  Grid,
  Table,
  TableHeaderRow,
} from 'dx-react-grid-grommet';

import {
  generateRows,
  globalSalesValues,
} from '../../../data/dx-grid-data/generator';
*/

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'amount', title: 'Sale Amount' },
      ],
      rows: generateRows({ columnValues: globalSalesValues, length: 8 }),
      tableColumnExtensions: [
        { columnName: 'sector', align: 'center' },
        { columnName: 'channel', align: 'center' },
        { columnName: 'amount', align: 'right' },
      ],
    };
  }

  render() {
    const { rows, columns, tableColumnExtensions } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <Table columnExtensions={tableColumnExtensions} />
        <TableHeaderRow />
      </Grid>
    );
  }
}

render(<Demo />);
