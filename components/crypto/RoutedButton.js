import RoutedButton from '../nextjs/RoutedButton';

export default ({ path, ...rest }) => (
  <RoutedButton path={`/crypto-grommet${path}`} preserveParams={['theme', 'currency']} {...rest} />
);
