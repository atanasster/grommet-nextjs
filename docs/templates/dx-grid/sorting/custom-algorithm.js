/*
import React from 'react';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
} from 'dx-react-grid-grommet';

import {
  generateRows,
  employeeTaskValues,
} from '../../../data/dx-grid-data/generator';
*/

const priorityWeights = {
  Low: 0,
  Normal: 1,
  High: 2,
};

const comparePriority = (a, b) => {
  const priorityA = priorityWeights[a];
  const priorityB = priorityWeights[b];
  if (priorityA === priorityB) {
    return 0;
  }
  return (priorityA < priorityB) ? -1 : 1;
};

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'subject', title: 'Subject' },
        { name: 'startDate', title: 'Start Date' },
        { name: 'dueDate', title: 'Due Date' },
        { name: 'priority', title: 'Priority' },
      ],
      integratedSortingColumnExtensions: [
        { columnName: 'priority', compare: comparePriority },
      ],
      tableColumnExtensions: [
        { columnName: 'subject', width: 400 },
      ],
      rows: generateRows({
        columnValues: employeeTaskValues,
        length: 8,
      }),
    };
  }

  render() {
    const {
      rows, columns, integratedSortingColumnExtensions, tableColumnExtensions,
    } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <SortingState />
        <IntegratedSorting
          columnExtensions={integratedSortingColumnExtensions}
        />
        <Table
          columnExtensions={tableColumnExtensions}
        />
        <TableHeaderRow showSortingControls />
      </Grid>
    );
  }
}

render(<Demo />);
