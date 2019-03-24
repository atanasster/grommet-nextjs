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
        { name: 'subject', title: 'Subject (with enabled word wrap)' },
        { name: 'startDate', title: 'Start Date' },
        { name: 'dueDate', title: 'Due Date' },
        { name: 'priority', title: 'Priority' },
        { name: 'status', title: 'Status' },
      ],
      rows: generateRows({ columnValues: employeeTaskValues, length: 8 }),
      tableColumnExtensions: [
        { columnName: 'subject', wordWrapEnabled: true },
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
        <Table columnExtensions={tableColumnExtensions}/>
        <TableHeaderRow/>
      </Grid>
    );
  }
}

render(<Demo />);
