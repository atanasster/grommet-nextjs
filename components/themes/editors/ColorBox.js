import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StopFill } from 'grommet-icons';
import { normalizeColor } from 'grommet/utils';

const StyledColorButton = styled.span`
  display:  inline-flex;
  svg {
    border: ${props => `${props.theme.button.border.width} solid ${props.theme.global.colors.border}`};
    fill: ${props => props.selectedColor};
    stroke: ${props => props.selectedColor};
    transition: none;
  }
`;

const ColorBox = ({ color, theme, dark }) => (
  <StyledColorButton
    theme={theme}
    selectedColor={color ? normalizeColor(color, { ...theme, dark }) : undefined}
  >
    <StopFill />
  </StyledColorButton>
);

ColorBox.defaultProps = {
  dark: false,
  color: undefined,
};
ColorBox.propTypes = {
  theme: PropTypes.object.isRequired,
  dark: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};
export default ColorBox;
