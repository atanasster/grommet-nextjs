import React, { Component } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { Box, Text } from 'grommet';
import { subscribeLastPrices, unSubscribeLastPrices } from '../../../sockets/price_stream/CryptoComparePrices';
import Exchange from '../exchanges/Exchange';
import Table from '../../grommet-table/index';
import { FormattedCoinValue, valueToColor } from './Coin';


export default class PriceTableStream extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { priceStream: null };
  }

  onPriceStream = (data) => {
    const lastData = this.state.priceStream ? this.state.priceStream.data : {};
    this.setState({ priceStream: { ...data, data: { ...lastData, ...data.data } } });
  };

  componentDidMount() {
    const { coin, toCoin, exchange } = this.props;
    subscribeLastPrices({
      symbol: coin.symbol, toSymbol: toCoin.symbol, exchange, callback: this.onPriceStream,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { coin, toCoin, exchange } = nextProps;
    if (coin !== this.props.coin ||
        toCoin !== this.props.toCoin ||
        exchange !== this.props.exchange) {
      unSubscribeLastPrices({ ...this.props, callback: this.onPriceStream });
      subscribeLastPrices({ ...nextProps, callback: this.onPriceStream });
    }
  }

  componentWillUnmount() {
    const { coin, toCoin, exchange } = this.props;
    unSubscribeLastPrices({
      symbol: coin.symbol, toSymbol: toCoin.symbol, exchange, callback: this.onPriceStream,
    });
  }

  render() {
    const { coin, toCoin } = this.props;
    const { priceStream } = this.state;
    let priceTable;
    if (priceStream) {
      const { data } = priceStream;
      let priceColor;
      // eslint-disable-next-line no-bitwise
      if (data.FLAGS & 1) {
        priceColor = valueToColor(1);
      // eslint-disable-next-line no-bitwise
      } else if (data.FLAGS & 1) {
        priceColor = valueToColor(-1);
      } else {
        priceColor = valueToColor(0);
      }
      const change24h = data.PRICE - data.OPEN24HOUR;
      const pctChange24h = change24h / data.OPEN24HOUR;
      const rows = [
        {
          label: '24hr change',
          value: (
            <Box direction='row' justify='end'>
              <Text color={valueToColor(change24h)}>
                <strong>
                  {numeral(change24h).format('0,0.00')}
                  <Text size='xsmall' >
                    {toCoin.symbol}
                  </Text>
                </strong>
              </Text>
              {' / '}
              <Text color={valueToColor(pctChange24h)}>
                <strong>{numeral(pctChange24h).format('0.00%')}</strong>
              </Text>
            </Box>
          ),
        }, {
          label: '24hr open',
          value: <FormattedCoinValue value={data.OPEN24HOUR} coin={toCoin} />,
        }, {
          label: '24hr high',
          value: <FormattedCoinValue value={data.HIGH24HOUR} coin={toCoin} />,
        }, {
          label: '24hr low',
          value: <FormattedCoinValue value={data.LOW24HOUR} coin={toCoin} />,
        }, {
          label: 'Last exchange',
          value: data.LASTMARKET && <Exchange exchange={data.LASTMARKET} justify='end' />,
        }, {
          label: 'Last trade volume',
          value: (<FormattedCoinValue value={data.LASTVOLUME} coin={coin} />),
        }, {
          label: 'Last trade value',
          value: <FormattedCoinValue value={data.LASTVOLUMETO} coin={toCoin} />,
        }, {
          label: '24hr volume',
          value: (
            <FormattedCoinValue value={data.VOLUME24HOUR} coin={coin} large={true} />
          ),
        }, {
          label: '24hr value',
          value: (
            <FormattedCoinValue value={data.VOLUME24HOURTO} coin={toCoin} large={true} />
          ),
        },
      ];
      priceTable = (
        <Box align='center'>
          <Box margin={{ vertical: 'medium' }}>
            <strong>
              <Text size='xlarge' color={priceColor} >
                {numeral(data.PRICE).format('0,0.00')}
              </Text>
              <Text size='xsmall' color={priceColor} >
                {toCoin.symbol}
              </Text>
            </strong>
          </Box>
          <Box fill={true}>
            <Table
              sortable={false}
              resizable={false}
              data={rows}
              columns={[
                { accessor: 'label' },
                { accessor: 'value' },
              ]}
            />
          </Box>
        </Box>
      );
    }
    return (
      <Box fill={true}>
        {priceTable}
      </Box>
    );
  }
}


PriceTableStream.propTypes = {
  coin: PropTypes.object.isRequired,
  toCoin: PropTypes.object.isRequired,
  exchange: PropTypes.string.isRequired,
};

