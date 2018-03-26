import App from '../../../components/crypto/App';
import withData from '../../../apollo/withData';
import ICOList from '../../../components/crypto/coins/ICOList';

const ICOs = () => (
  <App title='ICOs'>
    <ICOList />
  </App>
);

export default withData(ICOs);

