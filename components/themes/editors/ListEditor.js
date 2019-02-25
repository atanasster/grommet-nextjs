import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'grommet';

const ListEditor = ({ object, onChange, items }) => (
  <Select
    value={object}
    options={items}
    onChange={({ option }) => onChange(option)}
  />

);

ListEditor.propTypes = {
  object: PropTypes.string,
  items: PropTypes.array.isRequired,
};

ListEditor.defaultProps = {
  object: '',
};


export default ListEditor;
