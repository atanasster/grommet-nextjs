import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Box, Text, Markdown } from 'grommet';
import { shortDate } from 'grommet-controls/utils/moment';
import connect from '../../../redux';
import Table from '../../grommet-table';
import Coin from './Coin';
import ICOCard from './ICOCard';
import { allICOQuery } from '../graphql/coins';


class ICOList extends Component {
  // eslint-disable-next-line no-undef
  onExpand = row => (
    <Box direction='row' pad='small' gap='medium'>
      <Box>
        {row.original.ICO.description && (
          <Markdown >
            {row.original.ICO.description}
          </Markdown>
        )}
      </Box>
      <ICOCard
        coin={row.original}
      />
    </Box>
  );
  render() {
    const {
      data: { allICO, loading },
    } = this.props;
    const columns = [
      {
        Header: 'Coin',
        accessor: 'fullName',
        Cell: cell => (
          <Coin
            coin={cell.original}
            toCoin={{ symbol: this.props.defaultCurrency }}
            exchange={this.props.defaultExchange}
            level={4}
            border={null}
          />
        ),
        Footer: cell => (<Text>{`${cell.data.length} of ${allICO ? allICO.length : '0'} ICOs`}</Text>
        ),
      }, {
        Header: 'Status',
        accessor: 'ICO.status',
      }, {
        Header: 'Start date',
        accessor: 'ICO.date',
        id: 'start_date',
        Cell: cell => (shortDate(cell.value)),
      }, {
        Header: 'End date',
        accessor: 'ICO.endDate',
        id: 'end_date',
        Cell: cell => (cell.value ? shortDate(cell.value) : 'N/A'),
      }, {
        Header: 'Token type',
        accessor: 'ICO.tokenType',
      }, {
        Header: 'Funding target',
        getProps: () => ({ textAlign: 'end' }),
        accessor: 'ICO.fundingTarget',
      },
    ];
    return (
      <Box fill='horizontal'>
        <Table
          decorations={{
            table: { elevation: 'medium' },
            rowEven: { background: { color: 'light-1' } },
          }}
          loading={loading}
          filterable={true}
          data={allICO}
          SubComponent={this.onExpand}
          columns={columns}
          defaultSorted={[{ id: 'start_date', desc: true }]}
        />
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  defaultCurrency: state.settings.defaultCurrency,
  exchange: state.settings.aggregatedExchange,
  defaultExchange: state.settings.defaultExchange,
});


export default graphql(allICOQuery)(connect(mapStateToProps)(ICOList));
