import React from 'react';
import { Box, Layer, Heading, Button } from 'grommet';

type ModalPosition = 'top' | 'bottom' | 'left' | 'right' | 'center';
const positionToFull = (position: ModalPosition) => {
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

interface ModalProps {
  title: string,
  children: React.ReactNode,
  position?: ModalPosition,
  onClose (): void,
  onConfirm?(): void,

}
export const Modal: React.FC<ModalProps> = ({
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
  position: 'center',
};
