import React from 'react';
import { graphql } from 'react-apollo';
import { Chart } from 'grommet';
import { longDate } from 'grommet-controls/utils/moment';
import { priceHistoryQuery } from '../graphql/coins';


const PriceChart = ({ color, priceHistory: { priceHistory } }) => (
  <Chart
    thickness='xsmall'
    type='line'
    color={color}
    style={{ cursor: 'pointer' }}
    values={priceHistory ? priceHistory.map((price, index) => ({
      value: [index, price.close],
      label: longDate(price.time),
    })) : []}
  />
);


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
