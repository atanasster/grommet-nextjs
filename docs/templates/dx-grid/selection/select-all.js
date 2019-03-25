/*
import React from 'react';
import {
  SelectionState,
  IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableSelection,
} from 'dx-react-grid-grommet';
import { Box, Text } from 'grommet';
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
      rows: generateRows({ length: 1000 }),
      selection: [],
    };

    this.changeSelection = selection => this.setState({ selection });
  }

  render() {
    const { rows, columns, selection } = this.state;

    return (
      <Box gap='small'>
        <Text>
          {`Total rows selected: ${selection.length}`}
        </Text>
        <Grid
          rows={rows}
          columns={columns}
        >
          <SelectionState
            selection={selection}
            onSelectionChange={this.changeSelection}
          />
          <IntegratedSelection />
          <VirtualTable />
          <TableHeaderRow />
          <TableSelection showSelectAll />
        </Grid>
      </Box>
    );
  }
}

render(<Demo />);
