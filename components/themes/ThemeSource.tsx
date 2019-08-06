import React from 'react';
import JSONPretty from 'react-json-pretty';
import { Box } from 'grommet';
import { Modal } from '../Modal/index';

interface ThemeSourceProps {
  title?: string,
  theme: object,
  onClose(): void,
}
const ThemeSource: React.FC<ThemeSourceProps> = ({ title, theme, onClose }) => (
  <Modal
    title={title || 'theme source'}
    onClose={onClose}
  >
    <Box overflow='auto'>
      <JSONPretty json={theme} />
    </Box>

  </Modal>
);

export default ThemeSource;
