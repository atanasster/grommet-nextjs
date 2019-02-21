import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'grommet';
import connect from '../../redux';

const ThemeSelect = ({ theme, themes: { themes }, onChange }) => (
  <Select
    a11yTitle='Select theme'
    value={theme}
    options={Object.keys(themes)}
    onChange={({ option: newTheme }) => onChange(newTheme)}
  />
);

ThemeSelect.propTypes = {
  theme: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  themes: state.themes,
});

export default connect(mapStateToProps)(ThemeSelect);

