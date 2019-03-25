/*
import React from 'react';
import {
  SelectionState,
  IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFixedColumns,
  TableSelection,
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
        { name: 'channel', title: 'Channel' },
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'amount', title: 'Sale Amount' },
      ],
      rows: generateRows({ columnValues: globalSalesValues, length: 8 }),
      tableColumnExtensions: [
        { columnName: 'region', width: 180 },
        { columnName: 'sector', width: 200 },
        { columnName: 'channel', width: 180 },
        { columnName: 'customer', width: 230 },
        { columnName: 'product', width: 170 },
        { columnName: 'amount', align: 'right', width: 140 },
      ],
      leftColumns: [TableSelection.COLUMN_TYPE, 'region'],
      rightColumns: ['amount'],
    };
  }

  render() {
    const {
      rows, columns, tableColumnExtensions,
      leftColumns, rightColumns,
    } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <SelectionState />
        <IntegratedSelection />
        <Table
          columnExtensions={tableColumnExtensions}
        />
        <TableHeaderRow />
        <TableSelection />
        <TableFixedColumns
          leftColumns={leftColumns}
          rightColumns={rightColumns}
        />
      </Grid>
    );
  }
}

render(<Demo />);
