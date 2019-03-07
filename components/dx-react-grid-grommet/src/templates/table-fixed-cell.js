import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { normalizeColor } from 'grommet/utils';

const CellPlaceholder = styled.div`
  position: sticky;
  z-index: 19;
  ${props => `
      background-color: ${normalizeColor(props.theme.dark ? 'dark-1' : 'light-1', props.theme)};
      color: ${normalizeColor(props.theme.dark ? 'light-1' : 'dark-1', props.theme)};
    `}
  background-clip: padding-box;
`;

const FixedCellBase = withTheme(({
  component,
  side,
  showLeftDivider,
  showRightDivider,
  theme,
  style,
  position,
  ...restProps
}) => (
  <CellPlaceholder
    as={component}
    divLeft={showLeftDivider}
    divRight={showRightDivider}
    theme={theme}
    style={{
          ...style,
          [side]: position,
        }}
    {...restProps}
  />
));


FixedCellBase.propTypes = {
  style: PropTypes.object,
  component: PropTypes.func.isRequired,
  side: PropTypes.string.isRequired,
  position: PropTypes.number,
  showLeftDivider: PropTypes.bool,
  showRightDivider: PropTypes.bool,
};

FixedCellBase.defaultProps = {
  style: null,
  showLeftDivider: false,
  showRightDivider: false,
  position: undefined,
};

export const FixedCell = FixedCellBase;
