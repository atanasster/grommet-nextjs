import React from 'react';
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

interface ColorBoxProps {
  theme: object,
  dark?: boolean,
  color?: string | { dark?: string; light?: string },
}

const ColorBox: React.FC<ColorBoxProps> = ({ color, theme, dark }) => (
  <StyledColorButton
    theme={theme}
    selectedColor={color ? normalizeColor(color, {
      ...theme, dark,
    }) : undefined}
  >
    <StopFill />
  </StyledColorButton>
);

ColorBox.defaultProps = {
  dark: false,
  color: undefined,
};

export default ColorBox;
