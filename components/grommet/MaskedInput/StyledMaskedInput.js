import styled, { css } from 'styled-components';
import { focusStyle } from 'grommet/utils';
import { withTheme } from 'grommet/components/hocs';

const disabledStyle = `
  opacity: 0.3;
  cursor: default;
`;

export const StyledWidget = withTheme(styled.span`
  display: inline-block;
  ${props => props.disabled && disabledStyle}
  margin: ${props => props.theme.global.edgeSize.small};
  cursor: pointer;

  > * {
    vertical-align: bottom;
  }
`);

const plainStyle = css`
  border: none;
  -webkit-appearance: none;
`;

const StyledMaskedInput = styled.div`
  box-sizing: border-box;
  border: ${props => props.theme.global.input.border.width} solid ${props => props.theme.global.input.border.color};
  border-radius: ${props => props.theme.global.input.border.radius};
  outline: none;
  background-color: transparent;
  color: inherit;
  font: inherit;
  margin: 0;
  width: 100%;
  ${props => props.plain && plainStyle}
  ${props => props.focus && (!props.plain || props.focusIndicator) && focusStyle}
`;

export const StyledMaskedInputContainer = styled.div`
  width: 100%;
`;


export default StyledMaskedInput.extend`
  ${props => props.theme.textInput && props.theme.textInput.extend}
`;
