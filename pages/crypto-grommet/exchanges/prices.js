import React from 'react';
import App from '../../../components/crypto/App';
import connect from '../../../redux';
import Exchange from '../../../components/crypto/exchanges/Exchange';
import FavoritePrices from '../../../components/crypto/coins/FavoritePrices';
import withData from '../../../apollo/withData';

const ExchancePrices = ({ exchange }) => (
  <App title={exchange} visibleTitle={<Exchange exchange={exchange} />} >
    <FavoritePrices exchange={exchange} />
  </App>
);

const mapStateToProps = (state, props) => {
  const exchange = props.url.query.exchange || state.settings.defaultExchange;
  return {
    exchange,
  };
};

export default withData(connect(mapStateToProps)(ExchancePrices));
