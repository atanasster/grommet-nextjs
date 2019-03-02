import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'grommet';
import { View } from 'grommet-icons';

export const ToggleButton = ({
  onToggle, getMessage,
  buttonRef, active,
  ...restProps
}) => (
  <Button
    onClick={onToggle}
    icon={<View />}
    {...restProps}
  />
);

ToggleButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
  getMessage: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

ToggleButton.defaultProps = {
  active: false,
};
