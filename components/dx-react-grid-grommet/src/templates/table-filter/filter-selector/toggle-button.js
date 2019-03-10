import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'grommet';

export const ToggleButton = ({
  buttonRef, onToggle, disabled, children, ...restProps
}) => (
  <Button
    ref={buttonRef}
    onClick={onToggle}
    disabled={disabled}
    icon={children}
    {...restProps}
  />
);

ToggleButton.propTypes = {
  buttonRef: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

ToggleButton.defaultProps = {
  children: undefined,
  disabled: false,
};
