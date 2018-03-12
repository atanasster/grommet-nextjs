import styled, { css } from 'styled-components';

const sizeStyle = (props) => {
  const data = props.theme.calendar[props.size];
  return css`
    font-size: ${data.fontSize};
    line-height: ${data.lineHeight};
  `;
};

const StyledColors = styled.div`
  ${props => sizeStyle(props)}
`;


export const StyledRows = styled.div`
  position: relative;
`;

export const StyledRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-justify: between;
`;

export const StyledColorContainer = styled.div`
  flex: 0 0;
`;

const colorSizeStyle = (props) => {
  const data = props.theme.calendar[props.size];
  return css`
    width: ${data.daySize};
    height: ${data.daySize};
  `;
};

export const StyledColor = styled.div`
  top: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => colorSizeStyle(props)}
  span {
    visibility: hidden;
  };  
  transition: transform .2s;
  &:hover {
    z-index: 10;
    width: auto;
    -webkit-transform:scale(2);
    -moz-transform:scale(2);
    transform:scale(2);
    span {
      visibility: visible;
    };
  );
`;

export default StyledColors.extend`
  ${props => props.theme.calendar && props.theme.calendar.extend}
`;
