import { Box, Heading } from 'grommet';
import App from '../../components/crypto/App';
import RoutedAnchor from '../../components/crypto/RoutedAnchor';
import FavoritePrices from '../../components/crypto/coins/FavoritePrices';
import WorldMap from '../../components/crypto/exchanges/WorldMap';
import MarketCapDistribution from '../../components/crypto/coins/MarketCapDistribution';
import withData from '../../apollo/withData';
import connect from '../../redux';

class Home extends React.Component {
  render() {
    const { responsive, defaultExchange, defaultCurrency } = this.props;
    return (
      <App title='crypto-grommet' visibleTitle=''>
        <Box pad='small' align='center' >
          <Heading level={1}>
            <strong>Prices</strong>
          </Heading>
          <FavoritePrices />
        </Box>
        <Box border='top' align='center' style={{ height: responsive ? '430px' : undefined }}>
          <Heading level={1}>
            <RoutedAnchor route='world_exchanges' a11yTitle='Exchanges by continent'>
              <strong>Exchanges by continent</strong>
            </RoutedAnchor>
          </Heading>
          <WorldMap />
        </Box>
        <Box border='top' align='center' basis='large'>
          <Heading level={1}>
            <RoutedAnchor route='markets_distribution' a11yTitle='Market cap distribution of crypto coins'>
              <strong>Top coins</strong>
            </RoutedAnchor>
          </Heading>
          <MarketCapDistribution exchange={defaultExchange} currency={defaultCurrency} />
        </Box>
      </App>
    );
  }
}

const mapStateToProps = state => ({
  responsive: state.nav.responsive,
  defaultExchange: state.settings.defaultExchange,
  defaultCurrency: state.settings.defaultCurrency,
});


export default withData(connect(mapStateToProps)(Home));
