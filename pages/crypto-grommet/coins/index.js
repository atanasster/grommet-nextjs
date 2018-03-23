import App from '../../../components/crypto/App';
import CoinsList from '../../../components/crypto/coins/CoinsList';
import withData from '../../../apollo/withData';

const Coins = () => (
  <App title='Coins'>
    <CoinsList />
  </App>
);

export default withData(Coins);

