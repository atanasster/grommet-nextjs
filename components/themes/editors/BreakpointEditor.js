import React from 'react';
import ListEditor from './ListEditor';

export default props => (
  <ListEditor
    items={['small', 'medium', 'large']}
    {...props}
  />

);

