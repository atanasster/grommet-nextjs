/*
import React from 'react';
import { RowDetailState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableRowDetail,
} from 'dx-react-grid-grommet';
import { Box, Text } from 'grommet';
import { generateRows } from '../../../data/dx-grid-data/generator';
*/

const RowDetail = ({ row }) => (
  <Box pad='medium' background='brand'>
    <Text>
      {`Details for ${row.name} from ${row.city}`}
    </Text>
  </Box>
);

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
      rows: generateRows({ length: 8 }),
    };
  }

  render() {
    const { rows, columns } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <RowDetailState
          defaultExpandedRowIds={[2, 5]}
        />
        <Table />
        <TableHeaderRow />
        <TableRowDetail
          contentComponent={RowDetail}
        />
      </Grid>
    );
  }
}

render(<Demo />);
