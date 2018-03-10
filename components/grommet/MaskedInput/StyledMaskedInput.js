import styled from 'styled-components';
import { TextInput } from 'grommet';
import { parseMetricToNum } from 'grommet/utils/mixins';
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


const StyledMaskedInput = styled(TextInput)`
  padding-right: ${(props) => {
    const widgetsBox = props.numWidgets *
      (24 + (2 * parseMetricToNum(props.theme.global.edgeSize.small)));

    // eslint-disable-next-line no-mixed-operators
    return widgetsBox + (parseMetricToNum(props.theme.global.spacing) / 2) -
    parseMetricToNum(props.theme.global.input.border.width);
  }}px;
`;


export const StyledMaskedInputContainer = styled.div`
  position: relative;
  width: 100%;
`;


export default StyledMaskedInput.extend`
  ${props => props.theme.textInput && props.theme.textInput.extend}
`;
