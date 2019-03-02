import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'grommet';

const StyledContainer = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  display: inline-block;
  transform: translate(calc(${props => props.clientOffset.x}px - 50%), calc(${props => props.clientOffset.y}px - 50%));
`;

const StyledColumn = styled.div`
  padding-left: ${props => props.theme.global.edgeSize.xsmall};
  padding-right: ${props => props.theme.global.edgeSize.xsmall};
  float: right;
  cursor: move;
`;


const ContainerBase = ({
  clientOffset, children,
  ...rest
}) => (
  <StyledContainer
    clientOffset={clientOffset}
    {...rest}
  >
    {children}
  </StyledContainer>
);

ContainerBase.propTypes = {
  clientOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

ContainerBase.defaultProps = {
  children: undefined,
};

export const Container = ContainerBase;

const ColumnBase = ({
  column,
  ...restProps
}) => (
  <StyledColumn
    {...restProps}
  >
    <Text>{column.title}</Text>
  </StyledColumn>

);

ColumnBase.propTypes = {
  column: PropTypes.object.isRequired,
};


export const Column = ColumnBase;
