import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';

const Title = ({ label, level, children }) => (
  <Box direction='row' justify='between' margin={{ bottom: 'large', top: 'small' }} align='center'>
    <Heading level={level} margin='none'>
      <strong>{label}</strong>
    </Heading>
    {children}
  </Box>
);

Title.defaultProps = {
  label: 'Title',
  level: 3,
};

Title.propTypes = {
  label: PropTypes.string,
  level: PropTypes.number,
};

export default Title;
