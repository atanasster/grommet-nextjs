import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { SearchInput } from '../utils/SearchInput';

export const SearchPanelInput = ({
  onValueChange, value, getMessage,
}) => (
  <Box align='start'>
    <SearchInput
      onChange={e => onValueChange(e.target.value)}
      value={value}
      placeholder={getMessage('searchPlaceholder')}
    />
  </Box>
);

SearchPanelInput.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  getMessage: PropTypes.func.isRequired,
};
SearchPanelInput.defaultProps = {
  value: '',
};
