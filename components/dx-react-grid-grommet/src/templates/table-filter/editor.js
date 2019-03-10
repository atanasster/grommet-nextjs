import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'grommet';

export const Editor = ({
  value, disabled, getMessage, onChange, classes,
  ...restProps
}) => (
  <TextInput
    disabled={disabled}
    value={value}
    onChange={event => onChange(event.target.value)}
    placeholder={getMessage('filterPlaceholder')}
    {...restProps}
  />
);

Editor.propTypes = {
  value: PropTypes.any,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  getMessage: PropTypes.func.isRequired,
};

Editor.defaultProps = {
  value: '',
  disabled: false,
  onChange: () => {},
};

