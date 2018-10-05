import { Card } from 'grommet-controls';
import RoutedAnchor from './RoutedAnchor';

export default ({
  name, path, children,
}) => (
  <Card background='brand' basis='medium' margin='xsmall'>
    <Card.CardTitle>
      <RoutedAnchor path={path}>
        {name}
      </RoutedAnchor>
    </Card.CardTitle>
    <Card.CardContent basis='220px' align='center' justify='center'>
      {children}
    </Card.CardContent>
  </Card>
);
