import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer, Heading, Button } from 'grommet';

const positionToFull = (position) => {
  switch (position) {
    case 'left':
    case 'right':
      return 'vertical';
    case 'top':
    case 'bottom':
      return 'horizontal';
    default:
      return false;
  }
};

export const Modal = ({
  title, children, position, onClose, onConfirm, ...rest
}) => (
  <Layer
    position={position}
    full={positionToFull(position)}
    onEsc={onClose}
    onClickOutside={onClose}
    responsive={false}
    {...rest}
  >
    <Box pad={{ horizontal: 'medium' }} gap='medium'>
      {title && (
        <Box pad='small' border='bottom'>
          <Heading margin='none' level={2}>{title}</Heading>
        </Box>
      )}
      {children}
      <Box direction='row-responsive' align='center' margin={{ vertical: 'medium' }} gap='small'>
        {onConfirm && <Button primary={true} label='OK' onClick={onConfirm} />}
        <Button primary={true} label='Close' onClick={onClose} />
      </Box>
    </Box>
  </Layer>
);

Modal.defaultProps = {
  children: undefined,
  position: 'center',
  onConfirm: undefined,
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'center']),
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
};
