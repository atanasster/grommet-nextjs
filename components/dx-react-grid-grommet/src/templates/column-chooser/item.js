import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, CheckBox, Text } from 'grommet';

const StyledItem = styled(Box)`
  cursor: pointer;
`;

export const Item = ({
  item: { column, hidden },
  disabled, onToggle,
  classes,
  ...restProps
}) => (
  <StyledItem
    tag='li'
    disabled={disabled}
    direction='row'
    gap='small'
    onClick={!disabled ? onToggle : null}
    {...restProps}
  >
    <CheckBox
      checked={!hidden}
      tabIndex={-1}
      disabled={disabled}
      onChange={() => {}}
    />
    <Text>{column.title || column.name}</Text>
  </StyledItem>
);

Item.propTypes = {
  item: PropTypes.shape({
    column: PropTypes.shape({
      name: PropTypes.string,
    }),
    hidden: PropTypes.bool,
  }).isRequired,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
};

Item.defaultProps = {
  onToggle: () => { },
  disabled: false,
};
