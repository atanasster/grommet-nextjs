import RoutedAnchor from '../nextjs/RoutedAnchor';

export default ({ path, ...rest }) => (
  <RoutedAnchor path={`/crypto-grommet${path}`} preserveParams={['theme', 'currency']} {...rest} />
);
