import styled from 'styled-components';
import { Box, TextInput } from 'grommet';
import { parseMetricToNum } from 'grommet/utils/mixins';

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
`;

export const StyledWidgetsContainer = styled(Box)`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`;

export default StyledDropInput.extend`
  ${props => props.theme.dropInput && props.theme.dropInput.extend}
`;
