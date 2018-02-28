import React from 'react';
import { TextInput } from 'grommet';

export default ({ filter, onChange, column }) => (
  <TextInput
    aria-label={`Filter data by ${typeof column.Header === 'string' ? column.Header : column.id}`}
    value={filter ? filter.value : ''}
    size='small'
    onChange={event => onChange(event.target.value)}
  />
);

