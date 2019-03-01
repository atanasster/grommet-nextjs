import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { List } from 'grommet-icons';

const StyledGroupButton = styled.div`
  padding-left: 0;
  height: ${props => props.theme.spacing.unit * 3};
  cursor: pointer;
  ${props => props.isDisabled && `
    cursor: default;
    opacity: 0.3;
  `}
`;

const GroupButtonBase = ({
  disabled, onGroup, theme, ...restProps
}) => (
  <StyledGroupButton
    onClick={(e) => {
      if (disabled) return;
      e.stopPropagation();
      onGroup(e);
    }}
    theme={theme}
    isDisabled={disabled}
    {...restProps}
  >
    <List />
  </StyledGroupButton>
);

GroupButtonBase.propTypes = {
  onGroup: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

GroupButtonBase.defaultProps = {
  disabled: false,
};

export const GroupButton = withTheme(GroupButtonBase);
