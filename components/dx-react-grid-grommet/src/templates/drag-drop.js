import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Text } from 'grommet';

const StyledContainer = styled.div`
  position: fixed;
  zIndex: 1000,
  left: 0;
  top: 0;
  display: inline-block;
  transform: translate(calc(${props => props.clientOffset.x}px - 50%), calc(${props => props.clientOffset.y}px - 50%))\`;
`;

const StyledColumn = styled(Box)`
  float: right;
  cursor: move;
`;


const ContainerBase = ({
  clientOffset, children,
  ...restProps
}) => (
  <StyledContainer
    clientOffset={clientOffset}
    {...restProps}
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
    pad={{ horizontal: 'small' }}
    {...restProps}
  >
    <Text>{column.title}</Text>
  </StyledColumn>

);

ColumnBase.propTypes = {
  column: PropTypes.object.isRequired,
};


export const Column = ColumnBase;
