/*
import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
} from 'dx-react-grid-grommet';

import { Button } from 'grommet';
import { Descend, Ascend } from 'grommet-icons';
import { generateRows } rom '../../../data/dx-grid-data/generator';
*/

const SortingIcon = ({ direction }) => (
  direction === 'asc'
    ? <Icons.Ascend />
    : <Icons.Descend />
);

const SortLabel = ({ onSort, children, direction }) => (
  <Button
    label={children}
    icon={(direction && <SortingIcon direction={direction} />)}
    onClick={onSort}
  />
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
        <SortingState
          defaultSorting={[{ columnName: 'city', direction: 'asc' }]}
        />
        <IntegratedSorting />
        <Table />
        <TableHeaderRow
          showSortingControls
          sortLabelComponent={SortLabel}
        />
      </Grid>
    );
  }
}

render(<Demo />);
