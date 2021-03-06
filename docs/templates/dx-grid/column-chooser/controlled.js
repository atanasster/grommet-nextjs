/*
import React from 'react';
import {
  Grid,
  Table,
  TableHeaderRow,
  ColumnChooser,
  TableColumnVisibility,
  Toolbar,
} from 'dx-react-grid-grommet';

import { generateRows } from '../../../data/dx-grid-data/generator';
*/

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
      tableColumnExtensions: [
        { columnName: 'sex', width: 100 },
      ],
      rows: generateRows({ length: 6 }),
      hiddenColumnNames: ['sex', 'car'],
    };

    this.hiddenColumnNamesChange = (hiddenColumnNames) => {
      this.setState({ hiddenColumnNames });
    };
  }

  render() {
    const {
      columns, rows, tableColumnExtensions, hiddenColumnNames,
    } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <Table
          columnExtensions={tableColumnExtensions}
        />
        <TableHeaderRow />
        <TableColumnVisibility
          hiddenColumnNames={hiddenColumnNames}
          onHiddenColumnNamesChange={this.hiddenColumnNamesChange}
        />
        <Toolbar />
        <ColumnChooser />
      </Grid>
    );
  }
}

render(<Demo />);
