import React from 'react';
import App from '../../../components/crypto/App';
import connect from '../../../redux';
import Exchange from '../../../components/crypto/exchanges/Exchange';
import ExchangeFees from '../../../components/crypto/exchanges/ExchangeFees';
import withData from '../../../apollo/withData';
import ExchangePageMenu from '../../../components/crypto/exchanges/ExchangePageMenu';

const ExchancePFees = ({ exchange }) => (
  <App
    title={`${exchange} fees`}
    visibleTitle={<Exchange exchange={exchange} />}
    menu={<ExchangePageMenu activeItem={2} exchange={exchange} />}
  >
    <ExchangeFees exchange={exchange} />
  </App>
);

const mapStateToProps = (state, props) => {
  const exchange = props.url.query.exchange || state.settings.defaultExchange;
  return {
    exchange,
  };
};

export default withData(connect(mapStateToProps)(ExchancePFees));
