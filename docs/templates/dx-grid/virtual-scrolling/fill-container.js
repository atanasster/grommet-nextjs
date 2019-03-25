/*
import React from 'react';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
} from 'dx-react-grid-grommet';
import { Box } from 'grommet';
import {
  generateRows,
  defaultColumnValues,
} from '../../../data/dx-grid-data/generator';
*/

const getRowId = row => row.id;
const Root = props => <Grid.Root {...props} style={{ height: '100%' }} />;

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'id', title: 'ID' },
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ],
      rows: generateRows({
        columnValues: { id: ({ index }) => index, ...defaultColumnValues },
        length: 100000,
      }),
    };
  }

  render() {
    const { rows, columns } = this.state;

    return (
      <Box height='600px'>
        <Grid
          rows={rows}
          columns={columns}
          getRowId={getRowId}
          rootComponent={Root}
        >
          <VirtualTable
            height="auto"
          />
          <TableHeaderRow />
        </Grid>
      </Box>
    );
  }
}

render(<Demo />);
