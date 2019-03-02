import React from 'react';
import PropTypes from 'prop-types';
import { Drop } from 'grommet';

export const Overlay = ({
  visible, onHide, children, target, ...restProps
}) => (
  <Drop
    open={visible}
    target={target}
    onClickOutside={onHide}
    onEsc={onHide}
    align={{ top: 'top', right: 'right' }}
    {...restProps}
  >
    {children}
  </Drop>
);

Overlay.propTypes = {
  onHide: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  target: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
};

Overlay.defaultProps = {
  visible: false,
  target: null,
};
