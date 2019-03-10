import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, TextInput } from 'grommet';
import { Search } from 'grommet-icons';

const StyledSearchInput = styled(TextInput)`
  -webkit-appearance: none;
`;

export const SearchInput = ({ onChange, value, placeholder }) => (
  <Box direction='row' align='center' border='all' pad={{ right: 'small' }}>
    <StyledSearchInput
      plain={true}
      focusIndicator={true}
      value={value}
      type='search'
      onChange={onChange}
      placeholder={placeholder}
    />
    <Search />
  </Box>
);

SearchInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  onChange: undefined,
  value: undefined,
  placeholder: 'Search...',
};
