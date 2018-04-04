import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';
import App from './App';

import RoutedAnchor from './RoutedAnchor';
import FavoritePrices from './coins/FavoritePrices';
import WorldMap from './exchanges/WorldMap';
import MarketCapDistribution from './coins/MarketCapDistribution';
import connect from '../../redux';

const HomePage = ({
  responsive, defaultExchange, defaultCurrency, showLogin,
}) => (
  <App title='crypto-grommet' visibleTitle='' showLogin={showLogin}>
    <Box pad='small' align='center' fill='horizontal'>
      <Heading level={1}>
        <strong>Prices</strong>
      </Heading>
      <FavoritePrices />
    </Box>
    <Box border='top' align='center' style={{ height: responsive ? '430px' : undefined }} fill='horizontal'>
      <Heading level={1}>
        <RoutedAnchor route='world_exchanges' a11yTitle='Exchanges by continent'>
          <strong>Exchanges by continent</strong>
        </RoutedAnchor>
      </Heading>
      <WorldMap />
    </Box>
    <Box border='top' align='center' fill='horizontal'>
      <Heading level={1}>
        <RoutedAnchor route='markets_distribution' a11yTitle='Market cap distribution of crypto coins'>
          <strong>Top coins</strong>
        </RoutedAnchor>
      </Heading>
      <MarketCapDistribution exchange={defaultExchange} currency={defaultCurrency} />
    </Box>
  </App>
);

const mapStateToProps = state => ({
  responsive: state.nav.responsive,
  defaultExchange: state.settings.defaultExchange,
  defaultCurrency: state.settings.defaultCurrency,
});

HomePage.defaultProps = {
  showLogin: false,
};

HomePage.propTypes = {
  showLogin: PropTypes.bool,
};

export default connect(mapStateToProps)(HomePage);
