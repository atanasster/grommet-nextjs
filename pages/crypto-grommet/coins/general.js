import React from 'react';
import App from '../../../components/crypto/App';
import connect from '../../../redux';
import withData from '../../../apollo/withData';

const CoinInfo = ({ symbol, toSymbol, exchange }) => (
  <App title={`${symbol}/${toSymbol}/${exchange} - under construction...`} />
);

const mapStateToProps = (state, props) => {
  const exchange = props.url.query.exchange || state.settings.defaultExchange;
  const { symbol } = props.url.query;
  const toSymbol = props.url.query.toSymbol || state.settings.defaultCurrency;
  return {
    exchange,
    symbol,
    toSymbol,
  };
};


export default withData(connect(mapStateToProps)(CoinInfo));
