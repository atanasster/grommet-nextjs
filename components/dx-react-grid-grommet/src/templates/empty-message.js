import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paragraph } from 'grommet';

export const EmptyMessage = ({
  getMessage,
  classes,
  ...restProps
}) => (
  <Box
    {...restProps}
  >
    <Paragraph size='large'>
      {getMessage('noColumns')}
    </Paragraph>
  </Box>
);

EmptyMessage.propTypes = {
  getMessage: PropTypes.func.isRequired,
};

