import React from 'react';
import App from '../../../components/crypto/App';
import connect from '../../../redux';
import Exchange from '../../../components/crypto/exchanges/Exchange';
import FavoriteOrderBooks from '../../../components/crypto/coins/FavoriteOrderBooks';
import withData from '../../../apollo/withData';
import ExchangePageMenu from '../../../components/crypto/exchanges/ExchangePageMenu';

const ExchancePrices = ({ exchange }) => (
  <App
    title={exchange}
    visibleTitle={<Exchange exchange={exchange} />}
    menu={<ExchangePageMenu activeItem={1} exchange={exchange} />}
  >
    <FavoriteOrderBooks exchange={exchange} />
  </App>
);

const mapStateToProps = (state, props) => {
  const exchange = props.url.query.exchange || state.settings.defaultExchange;
  return {
    exchange,
  };
};

export default withData(connect(mapStateToProps)(ExchancePrices));
