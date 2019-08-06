import React from 'react';
import ListEditor from './ListEditor';

export default props => (
  <ListEditor
    items={['blink', 'dashed', 'dotted', 'double', 'line-through', 'none', 'overline', 'solid', 'underline', 'unset', 'wavy']}
    {...props}
  />

);

