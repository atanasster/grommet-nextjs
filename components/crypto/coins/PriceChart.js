import React from 'react';
import { graphql } from 'react-apollo';
import { Chart } from 'grommet';
import { longDate } from 'grommet-controls/utils/moment';
import { priceHistoryQuery } from '../graphql/coins';


const PriceChart = ({ color, priceHistory: { priceHistory } }) => (priceHistory ? (<Chart
  thickness='xsmall'
  type='line'
  color={color}
  size={{ width: 'full', height: 'xsmall' }}
  style={{ cursor: 'pointer' }}
  values={priceHistory.map((price, index) => ({
      value: [index, price.close],
      label: longDate(price.time),
    }))}
/>) : null);


export default graphql(priceHistoryQuery, {
  name: 'priceHistory',
  options: props => ({
    variables: {
      symbol: props.symbol,
      toSymbol: props.toSymbol,
      exchange: props.exchange,
      period: props.period,
      limit: props.points,
    },
  }),
})(PriceChart);
