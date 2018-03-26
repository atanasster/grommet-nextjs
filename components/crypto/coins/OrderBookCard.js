import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import ReactHighcharts from 'react-highcharts';
import numeral from 'numeral';
import { Box, Text } from 'grommet';
import { longDate } from 'grommet-controls/utils/moment';
import Table from '../../grommet-table';
import Card from '../Card';
import { CoinToCoin } from './Coin';
import Exchange from '../exchanges/Exchange';
import { orderBookQuery } from '../graphql/exchanges';
import { coinInfoQuery } from '../graphql/coins';


function renderAskBidTable(data) {
  return (
    <Table
      sortable={false}
      resizable={false}
      columns={[
        {
          Header: 'Price',
          Cell: props => (
            numeral(props.original.price)
              .format('$0,0.00')
          ),
          decorations: {
            cell: {
              align: 'end',
            },
          },
        }, {
          Header: 'Qty',
          Cell: props => (
            numeral(props.original.qty).format('0,0.0000')
          ),
          decorations: {
            cell: {
              align: 'end',
            },
          },
        },
      ]}
      data={data.slice(0, 12)}
    />
  );
}

class ConnectedOrderBook extends Component {
  renderChart() {
    const { data: { orderBook }, coin } = this.props;
    const { toSymbol } = this.props;
    const config = {
      chart: {
        type: 'area',
      },
      title: {
        text: orderBook ? longDate(orderBook.last_updated) : '',
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        area: {
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
      tooltip: {
        valueDecimals: 8,
        useHTML: true,
        headerFormat: '<small style="font-size: 12px;color:{series.color}"><strong>{series.name}</strong></small>.',
        pointFormat: `<table><tbody><tr><td>Sum ${coin.symbol}</td><td style="text-align: right"><b>{point.y}</b></td></tr>` +
                      `<tr><td>Price ${toSymbol}</td><td style="text-align: right"><b>{point.x}</b></td></tr></tbody></table>`,
        crosshairs: [true, true],
      },
      yAxis: {
        visible: false,
      },
      xAxis: {
        allowDecimals: true,
        labels: {
          formatter() {
            return this.value;
          },
        },
      },
    };
    const asks = [];
    const bids = [];
    // remove unnatural asks / bids
    if (orderBook) {
      const MarketThreshold = 2;
      orderBook.asks.filter(item => ((item.price / orderBook.asks[0].price) < MarketThreshold))
        .reduce((total, item) => {
          const t = total + item.qty;
          asks.push([item.price, t]);
          return t;
        }
          , 0);
      orderBook.bids.filter(item => ((orderBook.bids[0].price / item.price) < MarketThreshold))
        .reduce((total, item) => {
          const t = total + item.qty;
          bids.push([item.price, t]);
          return t;
        }
          , 0);
      bids.reverse();
    }
    return (
      <ReactHighcharts
        config={{
          ...config,
          series: [
            {
              name: 'bid', step: true, data: bids, color: '#ff324d', fillOpacity: 0.3,
            },
            {
              name: 'ask', step: true, data: asks, color: '#8cc800', fillOpacity: 0.3,
            },
          ],
}}
        domProps={{ style: { width: '100%' } }}
      />
    );
  }

  render() {
    const { data: { orderBook }, exchange, coin } = this.props;
    if (!orderBook || !coin) {
      return null;
    }
    const { asks, bids, realToSymbol } = orderBook;
    return (
      <Card
        title={<CoinToCoin coin={coin} toCoin={{ symbol: realToSymbol }} exchange={exchange} border='bottom' />}
        subTitle={<Exchange exchange={exchange} />}
      >
        <Box basis='small' direction='row'>
          {this.renderChart()}
        </Box>
        <Box direction='row' pad=' small'>
          <Box basis='1/2' align='center' gap='small'>
            <Text size='medium'><strong>Bid</strong></Text>
            {renderAskBidTable(bids)}
          </Box>
          <Box basis='1/2' align='center' gap='small'>
            <Text size='medium'><strong>Ask</strong></Text>
            {renderAskBidTable(asks)}
          </Box>
        </Box>
      </Card>
    );
  }
}

ConnectedOrderBook.propTypes = {
  coin: PropTypes.object.isRequired,
  toSymbol: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
};

export const ConnectedOrderBookCard = graphql(orderBookQuery, {
  options: props => ({
    variables: {
      start: 10,
      limit: 100,
      symbol: props.coin.symbol,
      toSymbol: props.toSymbol,
      exchange: props.exchange,
    },
  }),
})(ConnectedOrderBook);

const OrderBookCard = ({ coin: { coin }, ...rest }) => (
  coin ? <ConnectedOrderBookCard coin={coin} {...rest} /> : null
);

OrderBookCard.propTypes = {
  symbol: PropTypes.string.isRequired,
  toSymbol: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
};

export default graphql(coinInfoQuery, { name: 'coin', options: props => ({ variables: { symbol: props.symbol } }) })(OrderBookCard);
