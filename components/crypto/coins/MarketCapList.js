import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Box } from 'grommet';
import Table from '../../grommet-table';
import CardScroll from '../CardScroll';
import Coin, { FormattedCoinValue, ColoredPercentChange } from './Coin';
import PriceCard from './PriceCard';
import OrderBookCard from './OrderBookCard';
import { marketCapQuery } from '../graphql/coins';

const ITEMS_PER_PAGE = 25;
class MarketCapList extends React.Component {
  start = 0;
  pageSize = ITEMS_PER_PAGE;
  requestMarketCapTable(currency) {
    const { loadMoreEntries } = this.props;
    loadMoreEntries({
      currency,
      start: this.start,
      pageSize: this.pageSize,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { currency } = nextProps;
    if (currency !== this.props.currency) {
      this.requestMarketCapTable(currency);
    }
  }

  onExpand = (row) => {
    const { exchange, currency } = this.props;
    return (
      <CardScroll>
        <PriceCard
          symbol={row.original.symbol}
          toSymbol={currency}
          exchange={exchange}
        />
        <OrderBookCard
          symbol={row.original.symbol}
          toSymbol={currency}
          exchange={exchange}
        />
      </CardScroll>
    );
  }

  fetchData = ({ pageSize, page }) => {
    const { currency } = this.props;
    if (pageSize * page !== this.start || this.pageSize !== pageSize) {
      this.start = pageSize * page;
      this.pageSize = pageSize;
      this.requestMarketCapTable(currency);
    }
  };

  render() {
    const {
      data: { loading, marketCap }, currency, exchange,
    } = this.props;
    const columns = [
      {
        Header: 'Rank',
        accessor: 'rank',
        maxWidth: 60,
        getProps: () => ({ textAlign: 'end' }),
      },
      {
        Header: 'Coin',
        accessor: 'symbol',
        Cell: cell => (
          <Coin
            coin={cell.original.coin}
            toCoin={{ symbol: currency }}
            exchange={exchange}
            level={4}
            border={null}
          />
        ),
      }, {
        Header: 'Market cap',
        accessor: 'market_cap',
        Cell: cell => (
          <FormattedCoinValue
            value={cell.value}
            coin={cell.original.coin}
            large={true}
          />
        ),
        getProps: () => ({ align: 'end' }),
      }, {
        Header: `Price (${currency})`,
        accessor: 'price',
        maxWidth: 120,
        Cell: cell => (<FormattedCoinValue value={cell.value} coin={cell.original.coin} />),
        getProps: () => ({ align: 'end' }),
      }, {
        Header: '24hr vol',
        accessor: 'volume_24h',
        Cell: cell => (
          <FormattedCoinValue value={cell.value} coin={cell.original.coin} large={true} />
        ),
        getProps: () => ({ textAlign: 'end' }),
      }, {
        Header: '%1hr',
        accessor: 'percent_change_1h',
        maxWidth: 100,
        Cell: cell => (<ColoredPercentChange value={cell.value} />),
        getProps: () => ({ textAlign: 'end' }),
      }, {
        Header: '%24hr',
        accessor: 'percent_change_24h',
        maxWidth: 120,
        Cell: cell => (<ColoredPercentChange value={cell.value} />),
        getProps: () => ({ textAlign: 'end' }),
      }, {
        Header: '%7d',
        accessor: 'percent_change_7d',
        maxWidth: 120,
        Cell: cell => (<ColoredPercentChange value={cell.value} />),
        getProps: () => ({ textAlign: 'end' }),
      }, {
        Header: 'Circulation',
        accessor: 'available_supply',
        Cell: cell => (
          <FormattedCoinValue value={cell.value} coin={cell.original.coin} large={true} />
        ),
        getProps: () => ({ textAlign: 'end' }),
      }, {
        Header: 'Total',
        accessor: 'total_supply',
        Cell: cell => (
          <FormattedCoinValue value={cell.value} coin={cell.original.coin} large={true} />
        ),
        getProps: () => ({ textAlign: 'end' }),
      },
    ];
    return (
      <Box fill='horizontal'>
        <Table
          decorations={{
            table: { elevation: 'medium' },
            rowEven: { background: { color: 'light-1' } },
          }}
          sortable={false}
          manual={true}
          pages={13}
          loading={loading}
          onFetchData={this.fetchData}
          data={marketCap}
          SubComponent={this.onExpand}
          defaultPageSize={ITEMS_PER_PAGE}
          columns={columns}
        />
      </Box>
    );
  }
}


MarketCapList.propTypes = {
  currency: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
};

export default graphql(marketCapQuery, {
  options: props => ({
    variables: {
      currency: props.currency.toLowerCase(),
      start: 0,
      limit: ITEMS_PER_PAGE,
    },
  }),
  props({ data }) {
    return {
      data,
      loadMoreEntries({ currency, start, pageSize }) {
        return data.fetchMore({
          variables: {
            currency: currency.toLowerCase(),
            start,
            limit: pageSize,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }
            return Object.assign({}, previousResult, {
              marketCap: fetchMoreResult.marketCap,
            });
          },
        });
      },
    };
  },
})(MarketCapList);

