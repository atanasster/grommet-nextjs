import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { normalizeColor } from 'grommet/utils';

const FixedCellBase = ({
  component: CellPlaceholder,
  side,
  showLeftDivider,
  showRightDivider,
  className,
  classes,
  style,
  position,
  ...restProps
}) => {
  const StyledPlaceholder = styled(CellPlaceholder)`
        position: sticky;
        z-index: 300;
        background-clip: padding-box;
        ${props => props.dividerRight && `border-right: solid ${props.theme.global.borderSize.xsmall} ${normalizeColor('border', props.theme)};`}}
        ${props => props.dividerLeft && `border-left: solid ${props.theme.global.borderSize.xsmall} ${normalizeColor('border', props.theme)};`}}
    `;
  return (
    <StyledPlaceholder
      dividerLeft={showLeftDivider}
      dividerRight={showRightDivider}
      style={{
          ...style,
          [side]: position,
        }}
      {...restProps}
    />
  );
};


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
