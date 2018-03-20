import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Chart } from 'grommet';
import { longDate } from 'grommet-controls/utils/moment';


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

export const priceHistoryQuery = gql`
  query getPriceHistory($symbol : String!, $toSymbol : String!, $exchange: String!, $period: String, $limit: Int) {
    priceHistory(symbol: $symbol, toSymbol: $toSymbol, exchange: $exchange, period: $period, limit: $limit) {
      time
      close
      high
      low
      open
      volumefrom
      volumeto
    }
  }
`;


export default
graphql(priceHistoryQuery, {
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
