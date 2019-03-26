/*
import React from 'react';
import {
  TreeDataState,
  CustomTreeData,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableTreeColumn,
} from 'dx-react-grid-grommet';

import {
  generateRows,
  defaultColumnValues,
} from '../../../data/dx-grid-data/generator';
*/

const getChildRows = (row, rootRows) => (row ? row.items : rootRows);

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    const columnValues = {...defaultColumnValues};
    columnValues.items = ({ random }) => (random() > 0.5
      ? generateRows({
        columnValues: {
          ...defaultColumnValues,
          items: () => (random() > 0.5
            ? generateRows({
              columnValues: {
                ...defaultColumnValues,
              },
              length: Math.trunc(random() * 5) + 1,
              random,
            })
            : null),
        },
        length: Math.trunc(random() * 3) + 1,
        random,
      })
      : null);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ],
      tableColumnExtensions: [
        { columnName: 'name', width: 300 },
      ],
      data: generateRows({
        columnValues,
        length: 3,
      }),
    };
  }

  render() {
    const { data, columns, tableColumnExtensions } = this.state;

    return (
      <Grid
        rows={data}
        columns={columns}
      >
        <TreeDataState />
        <CustomTreeData
          getChildRows={getChildRows}
        />
        <Table
          columnExtensions={tableColumnExtensions}
        />
        <TableHeaderRow />
        <TableTreeColumn
          for="name"
        />
      </Grid>
    );
  }
}

render(<Demo />);
