import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grommet';

const StyledTreeContent = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TableTreeContentBase = ({
  children, ...restProps
}) => (
  <StyledTreeContent
    {...restProps}
  >
    <Box direction='row' align='center' gap='small'>
      {children}
    </Box>
  </StyledTreeContent>
);

TableTreeContentBase.propTypes = {
  children: PropTypes.node,
};

TableTreeContentBase.defaultProps = {
  children: undefined,
};

export const TableTreeContent = TableTreeContentBase;
