import React from 'react';
import { Card } from 'grommet-controls';
import RoutedAnchor from '../app/RoutedAnchor';

interface ItemProps {
  name: string,
  path: string,
}
const Item: React.FC<ItemProps> = ({
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

export default Item;
