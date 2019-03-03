import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { normalizeColor } from 'grommet/utils';

export const BandedHeaderCell = ({
  component, beforeBorder, ...restProps
}) => {
  const HeaderCellComponent = styled(component)`
    border-right: ${props => `solid ${props.theme.global.borderSize.xsmall} ${normalizeColor('border', props.theme)};`}}
    border-top: none;
    &:last-child {
      border-right: 0;
    }
    vertical-align: bottom;
    padding-bottom: ${props => props.theme.global.edgeSize.small};
    ${props => props.beforeBorder && `border-left: solid ${props.theme.global.borderSize.xsmall} ${normalizeColor('border', props.theme)};`}
  `;
  return (
    <HeaderCellComponent
      beforeBorder={beforeBorder}
      {...restProps}
    />
  );
};

BandedHeaderCell.propTypes = {
  component: PropTypes.func.isRequired,
  beforeBorder: PropTypes.bool,
};

BandedHeaderCell.defaultProps = {
  beforeBorder: false,
};

