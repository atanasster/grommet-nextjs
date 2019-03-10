import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grommet';

const StyledTreeContent = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TableTreeContent = ({
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

TableTreeContent.propTypes = {
  children: PropTypes.node,
};

TableTreeContent.defaultProps = {
  children: undefined,
};
