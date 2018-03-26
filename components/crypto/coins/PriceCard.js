import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { Box, Menu } from 'grommet';
import RoutedButton from '../RoutedButton';
import Card from '../Card';
import Exchange from '../exchanges/Exchange';
import { CoinToCoin } from './Coin';
import PriceTableStream from './PriceTableStream';
import PriceChart from './PriceChart';
import { coinInfoQuery } from '../graphql/coins';

const optionDuration = [
  { label: 'Daily', value: 'day' },
  { label: 'Hourly', value: 'hour' },
  { label: 'Minutes', value: 'minute' },
];

const optionLimit = [
  { label: '60 points', value: 60 },
  { label: '100 points', value: 100 },
  { label: '500 points', value: 500 },
  { label: '1000 points', value: 1000 },
  { label: '2000 points', value: 2000 },
];


export class ConnectedPriceCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { period: props.period, points: props.points };
  }

  onSelectPeriod = (item) => {
    this.setState({ period: item.value });
  }

  onSelectPoints = (item) => {
    this.setState({ points: item.value });
  }

  render() {
    const {
      exchange, color, coin, toCoin,
    } = this.props;
    if (!coin || !toCoin) {
      return null;
    }
    const { period, points } = this.state;
    return (
      <Card
        title={<CoinToCoin coin={coin} toCoin={toCoin} exchange={exchange} border='bottom' />}
        subTitle={<Exchange exchange={exchange} />}
      >
        <Box pad='small'>
          <Box border='bottom'>
            <Box justify='between' direction='row'>
              <Menu
                a11yTitle='Select period'
                items={optionDuration.filter(item => (item.value !== period)).map(item => (
                  { ...item, onClick: () => this.onSelectPeriod(item) }
                ))}
                label={optionDuration.find(p => (p.value === period)).label}
              />
              <Menu
                a11yTitle='Select data points'
                items={optionLimit.filter(item => (item.value !== points)).map(item => (
                  { value: item.value, label: `${item.value} ${period}s`, onClick: () => this.onSelectPoints(item) }
                ))}
                label={`${optionLimit.find(p => (p.value === points)).value} ${period}s`}
              />
            </Box>
            <RoutedButton route='coin_charts' params={{ symbol: coin.symbol, toSymbol: toCoin.symbol, exchange }} >
              <PriceChart
                color={color}
                symbol={coin.symbol}
                toSymbol={toCoin.symbol}
                exchange={exchange}
                period={period}
                points={points}
              />
            </RoutedButton>
          </Box>
          <PriceTableStream coin={coin} toCoin={toCoin} exchange={exchange} />
        </Box>
      </Card>
    );
  }
}
ConnectedPriceCard.defaultProps = {
  color: undefined,
  period: 'day',
  points: 60,
  coin: undefined,
  toCoin: undefined,

};

ConnectedPriceCard.propTypes = {
  coin: PropTypes.object,
  toCoin: PropTypes.object,
  exchange: PropTypes.string.isRequired,
  period: PropTypes.string,
  points: PropTypes.number,
  color: PropTypes.string,
};

const PriceCard = ({ coin: { coin }, toCoin: { coin: toCoin }, ...rest }) => (
  <ConnectedPriceCard coin={coin} toCoin={toCoin} {...rest} />
);

PriceCard.defaultProps = {
  color: undefined,
  period: 'day',
  points: 60,
};

PriceCard.propTypes = {
  symbol: PropTypes.string.isRequired,
  toSymbol: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
  period: PropTypes.string,
  points: PropTypes.number,
  color: PropTypes.string,
};


export default compose(
  graphql(coinInfoQuery, { name: 'coin', options: props => ({ variables: { symbol: props.symbol } }) }),
  graphql(coinInfoQuery, { name: 'toCoin', options: props => ({ variables: { symbol: props.toSymbol } }) }),
)(PriceCard);
