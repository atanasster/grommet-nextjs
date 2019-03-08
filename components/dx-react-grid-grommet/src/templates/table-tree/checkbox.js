import React from 'react';
import PropTypes from 'prop-types';
import { CheckBox } from 'grommet';

export const TableTreeCheckbox = ({
  disabled, checked, indeterminate, onChange, ...restProps
}) => (
  <CheckBox
    checked={checked}
    indeterminate={indeterminate}
    disabled={disabled}
    onClick={(e) => {
      if (disabled) return;
      e.stopPropagation();
      onChange();
    }}
    {...restProps}
  />
);

TableTreeCheckbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
};

TableTreeCheckbox.defaultProps = {
  disabled: false,
  checked: false,
  indeterminate: false,
  onChange: () => {},
};

