/*
import React from 'react';
import { SearchState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Toolbar,
  SearchPanel,
  VirtualTable,
  TableHeaderRow,
} from 'dx-react-grid-grommet';
import { Box } from 'grommet';
import { Spinning } from 'grommet-controls';
*/

const URL = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi/Orders';

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'ShipCountry', title: 'Country' },
        { name: 'ShipCity', title: 'City' },
        { name: 'ShipAddress', title: 'Address' },
      ],
      rows: [],
      loading: true,
      searchValue: '',
    };

    this.changeSearchValue = this.changeSearchValue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  changeSearchValue(searchValue) {
    this.setState({
      loading: true,
      searchValue,
    });
  }

  queryString() {
    const { searchValue, columns } = this.state;

    let filter = columns.reduce((acc, { name }) => {
      acc.push(`["${name}", "contains", "${encodeURIComponent(searchValue)}"]`);
      return acc;
    }, []).join(',"or",');

    if (columns.length > 1) {
      filter = `[${filter}]`;
    }

    return `${URL}?filter=${filter}`;
  }

  loadData() {
    const queryString = this.queryString();
    if (queryString === this.lastQuery) {
      this.setState({ loading: false });
      return;
    }

    fetch(queryString, { mode: 'cors' })
      .then(response => response.json())
      .then((orders) => {
        this.setState({
          rows: orders.data,
          loading: false,
        });
      })
      .catch(() => this.setState({ loading: false }));

    this.lastQuery = queryString;
  }

  render() {
    const { rows, columns, loading } = this.state;

    return (
      <Box align='center'>
        <Grid
          rows={rows}
          columns={columns}
        >
          <SearchState
            onValueChange={this.changeSearchValue}
          />
          <VirtualTable />
          <TableHeaderRow />
          <Toolbar />
          <SearchPanel />
        </Grid>
        {loading && <Spinning />}
      </Box>
    );
  }
}

render(<Demo />);
