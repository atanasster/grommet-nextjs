import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Box, Text, Markdown } from 'grommet';
import Table from '../../grommet-table';
import Coin from './Coin';
import PriceCard from './PriceCard';
// import ICOCard from './COCard';
import OrderBookCard from './OrderBookCard';
import { allCoinsQuery } from '../graphql/coins';

class CoinsList extends Component {
  // eslint-disable-next-line no-undef
  columns = (props, rows) => (
    [
      {
        Header: 'Coin',
        accessor: 'fullName',
        Cell: cell => (
          <Coin
            coin={cell.original}
            toCoin={{ symbol: props.defaultCurrency }}
            exchange={props.defaultExchange}
            level={4}
            border={null}
          />
        ),
        Footer: cell => (
          <Text >{`${cell.data.length} of ${rows ? rows.length : '0'} coins`}</Text>
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
    ]
  );
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
          {/* <ICOCard symbol={row.original.symbol} /> */}
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
      onFilter, onExpand = this.onExpand,
      columns = this.columns,
    } = this.props;
    const rows = onFilter ? allCoins
      .filter(item => onFilter(item))
      : allCoins;
    return (
      <Table
        decorations={{
          table: { elevation: 'medium' },
          rowEven: { background: { color: 'light-1' } },
        }}
        loading={loading}
        filterable={true}
        data={rows}
        SubComponent={onExpand}
        columns={columns(this.props, rows)}
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

CoinsList.defaultProps = {
  onFilter: undefined,
  onExpand: undefined,
};
CoinsList.propTypes = {
  onFilter: PropTypes.func,
  onExpand: PropTypes.func,
};

export default graphql(allCoinsQuery)(connect(mapStateToProps)(CoinsList));
