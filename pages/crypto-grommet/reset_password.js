import App from '../../components/crypto/App';
import ResetPasswordForm from '../../components/crypto/auth/ResetPasswordForm';
import withData from '../../apollo/withData';

export default withData(({ url: { query: { token } } }) => (
  <App title='Reset password'>
    <ResetPasswordForm token={token} />
  </App>
));
