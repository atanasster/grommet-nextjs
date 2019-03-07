import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { normalizeColor } from 'grommet/utils';

const HeaderCellComponent = styled.div`
  border-right: ${props => `solid ${props.theme.global.borderSize.xsmall} ${normalizeColor('border', props.theme)};`}}
  border-top: none;
  &:last-child {
    border-right: 0;
  }
  vertical-align: middle;
  padding-bottom: ${props => props.theme.global.edgeSize.small};
  ${props => props.beforeBorder && `border-left: solid ${props.theme.global.borderSize.xsmall} ${normalizeColor('border', props.theme)};`}
`;

export const BandedHeaderCell = ({
  component, beforeBorder, ...restProps
}) => (
  <HeaderCellComponent
    scope='col'
    as={component}
    beforeBorder={beforeBorder}
    {...restProps}
  />
);

BandedHeaderCell.propTypes = {
  component: PropTypes.func.isRequired,
  beforeBorder: PropTypes.bool,
};

BandedHeaderCell.defaultProps = {
  beforeBorder: false,
};

