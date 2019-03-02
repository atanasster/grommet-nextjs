import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Box, CheckBox, Text } from 'grommet';

export const Item = ({
  item: { column, hidden },
  disabled, onToggle,
  classes,
  ...restProps
}) => (
  <Box
    as='li'
    disabled={disabled}
    direction='row'
    justify='between'
    onClick={!disabled ? onToggle : null}
    {...restProps}
  >
    <CheckBox
      checked={!hidden}
      tabIndex={-1}
      disabled={disabled}
    />
    <Text>{column.title || column.name}</Text>
  </Box>
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
