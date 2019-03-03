import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DropInput } from 'grommet-controls';
import { Search } from 'grommet-icons';

const StyledSearchInput = styled(DropInput)`
  -webkit-appearance: none;
`;

export const SearchInput = ({ onChange, value, placeholder }) => (
  <StyledSearchInput
    value={value}
    type='search'
    onChange={onChange}
    placeholder={placeholder}
    widgets={[
      { icon: <Search />, onClick: () => {} },
    ]}
  />
);

SearchInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  onChange: undefined,
  value: undefined,
  placeholder: 'search',
};
