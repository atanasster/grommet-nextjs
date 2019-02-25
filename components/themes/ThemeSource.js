import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';
import { Box } from 'grommet';
import { Modal } from '../Modal';

const ThemeSource = ({ title, theme, onClose }) => (
  <Modal
    title={title || 'theme source'}
    onClose={onClose}
  >
    <Box overflow='auto'>
      <JSONPretty json={theme} />
    </Box>

  </Modal>
);

ThemeSource.defaultProps = {
  theme: undefined,
  title: undefined,
};
ThemeSource.propTypes = {
  theme: PropTypes.any,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ThemeSource;
