import React from 'react';
import ListEditor from './ListEditor';

export default props => (
  <ListEditor
    items={['100', '200', '300', '400', '500', '600', '700', '800', '900', 'bold', 'bolder', 'lighter', 'normal']}
    {...props}
  />

);

