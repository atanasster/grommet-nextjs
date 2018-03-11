import styled from 'styled-components';
import { TextInput } from 'grommet';
import { parseMetricToNum } from 'grommet/utils/mixins';

const disabledStyle = `
  opacity: 0.3;
  cursor: default;
`;

export const StyledWidget = styled.span`
  display: inline-block;
  ${props => props.disabled && disabledStyle}
  margin: ${props => props.theme.global.edgeSize.small};
  > * {
    vertical-align: bottom;
  }
`;


const StyledDropInput = styled(TextInput)`
  padding-right: ${(props) => {
    const widgetsBox = props.numWidgets *
      (24 + (2 * parseMetricToNum(props.theme.global.edgeSize.small)));

    // eslint-disable-next-line no-mixed-operators
    return widgetsBox + (parseMetricToNum(props.theme.global.spacing) / 2) -
    parseMetricToNum(props.theme.global.input.border.width);
  }}px;
`;


export const StyledDropInputContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
`;


export default StyledDropInput.extend`
  ${props => props.theme.dropInput && props.theme.dropInput.extend}
`;
