import { Box, Heading } from 'grommet';
import App from '../../components/App';
import FavoritePrices from '../../components/crypto/FavoritePrices';
import WorldMap from '../../components/crypto/WorldMap';
import withData from '../../apollo/withData';

class Home extends React.Component {
  render() {
    const { responsive } = this.props;
    return (
      <App title='crypto-grommet'>
        <Box align='center' style={{ height: responsive ? '430px' : undefined }}>
          <Heading level={1}>
            <strong>Exchanges by continent</strong>
          </Heading>
          <WorldMap />
        </Box>
        <Box pad='small' align='center' border='top'>
          <Heading level={1}>
            <strong>Prices</strong>
          </Heading>
          <FavoritePrices />
        </Box>
      </App>
    );
  }
}

export default withData(Home);
