import React from 'react';
import { Box } from 'grommet';
import App from '../../../components/crypto/App';
import withData from '../../../apollo/withData';
import MarketCapDistribution from '../../../components/crypto/coins/MarketCapDistribution';
import connect from '../../../redux';


const MarketCap = ({ defaultExchange, defaultCurrency }) => (
  <App title='Top coins distribution'>
    <Box basis='xlarge'>
      <MarketCapDistribution exchange={defaultExchange} currency={defaultCurrency} />
    </Box>
  </App>
);

const mapStateToProps = state => ({
  defaultExchange: state.settings.defaultExchange,
  defaultCurrency: state.settings.defaultCurrency,
});


export default withData(connect(mapStateToProps)(MarketCap));
