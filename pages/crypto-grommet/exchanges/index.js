import App from '../../../components/crypto/App';
import ExchangesList from '../../../components/crypto/exchanges/ExchangesList';
import withData from '../../../apollo/withData';

const Exchanges = () => (
  <App title='Exchanges'>
    <ExchangesList />
  </App>
);

export default withData(Exchanges);
