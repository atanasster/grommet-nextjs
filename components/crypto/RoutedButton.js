import RoutedButton from '../nextjs/RoutedButton';

export default props => (
  <RoutedButton preserveParams={['theme', 'currency']} {...props} />
);
