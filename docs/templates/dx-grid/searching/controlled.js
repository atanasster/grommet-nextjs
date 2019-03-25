/*
import React from 'react';
import {
  SearchState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  Toolbar,
  SearchPanel,
  TableHeaderRow,
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
      rows: generateRows({ length: 8 }),
      searchValue: 'Female',
    };

    this.changeSearchValue = value => this.setState({ searchValue: value });
  }

  render() {
    const { rows, columns, searchValue } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <SearchState
          value={searchValue}
          onValueChange={this.changeSearchValue}
        />
        <IntegratedFiltering />
        <Table />
        <TableHeaderRow />
        <Toolbar />
        <SearchPanel />
      </Grid>
    );
  }
}

render(<Demo />);
