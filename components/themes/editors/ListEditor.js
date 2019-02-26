import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'grommet';

const ListEditor = ({ object, onChange, items }) => (
  <Select
    value={typeof object === 'number' ? object.toString() : object}
    options={items}
    onChange={({ option }) => onChange(option)}
  />

);

ListEditor.propTypes = {
  object: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.array.isRequired,
};

ListEditor.defaultProps = {
  object: '',
};


export default ListEditor;
