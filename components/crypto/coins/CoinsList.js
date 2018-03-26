import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Box, Text, Markdown } from 'grommet';
import Table from '../../grommet-table';
import Coin from './Coin';
import PriceCard from './PriceCard';
import ICOCard from './ICOCard';
import OrderBookCard from './OrderBookCard';
import { allCoinsQuery } from '../graphql/coins';

class CoinsList extends Component {
  // eslint-disable-next-line no-undef
  onExpand = (row) => {
    const { defaultCurrency, exchange, defaultExchange } = this.props;
    if (row.original.ICO) {
      return (
        <Box direction='row' pad='small' gap='medium'>
          <Box>
            <Markdown >
              {row.original.ICO.description}
            </Markdown>
          </Box>
          <ICOCard
            coin={row.original}
          />
        </Box>
      );
    }
    return (
      <Box direction='row' pad='small' gap='medium'>
        <PriceCard
          symbol={row.original.symbol}
          toSymbol={defaultCurrency}
          exchange={exchange}
        />
        <OrderBookCard
          symbol={row.original.symbol}
          toSymbol={defaultCurrency}
          exchange={defaultExchange}
        />

      </Box>
    );
  };
  render() {
    const {
      data: { allCoins, loading },
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
        Footer: cell => (
          <Text >{`${cell.data.length} of ${allCoins ? allCoins.length : '0'} coins`}</Text>
        ),
      }, {
        Header: 'Algo',
        accessor: 'algorithm',
      }, {
        Header: 'Proof',
        accessor: 'proofType',
      }, {
        Header: 'Pre-mined',
        accessor: 'fullyPremined',
        getProps: () => ({ textAlign: 'center' }),
        Cell: cell => (cell.value === 0 ? 'Yes' : ''),
      }, {
        Header: 'Pre-mined value',
        accessor: 'preMinedValue',
        getProps: () => ({ textAlign: 'end' }),
      }, {
        Header: 'Total Coin Supply',
        getProps: () => ({ textAlign: 'end' }),
        accessor: 'totalCoinSupply',
        Cell: cell => (<Text textAlign='right'>{numeral(cell.value).format('0,000')}</Text>),
      }, {
        Header: 'Free float',
        accessor: 'totalCoinsFreeFloat',
        getProps: () => ({ textAlign: 'end' }),
      },
    ];
    return (
      <Table
        decorations={{
          table: { elevation: 'medium' },
          rowEven: { background: { color: 'light-1' } },
        }}
        loading={loading}
        filterable={true}
        data={allCoins}
        SubComponent={this.onExpand}
        columns={columns}
        defaultSorted={[{ id: 'symbol' }]}
      />
    );
  }
}

const mapStateToProps = state => ({
  defaultCurrency: state.settings.defaultCurrency,
  exchange: state.settings.aggregatedExchange,
  defaultExchange: state.settings.defaultExchange,
});


export default graphql(allCoinsQuery)(connect(mapStateToProps)(CoinsList));
