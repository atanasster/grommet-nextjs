import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { normalizeColor } from 'grommet/utils';

const FixedCellBase = withTheme(({
  component,
  side,
  showLeftDivider,
  showRightDivider,
  theme,
  style,
  position,
  ...restProps
}) => {
  const CellPlaceholder = styled(component)`
    position: sticky;
    z-index: 300;
    background-clip: padding-box;
    ${props => props.divRight && `border-right: solid ${props.theme.global.borderSize.xsmall} ${normalizeColor('border', props.theme)};`}}
    ${props => props.divLeft && `border-left: solid ${props.theme.global.borderSize.xsmall} ${normalizeColor('border', props.theme)};`}}
  `;
  console.log(component);
  return (
    <CellPlaceholder
      divLeft={showLeftDivider}
      divRight={showRightDivider}
      theme={theme}
      style={{
          ...style,
          [side]: position,
        }}
      {...restProps}
    />
  );
});


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
