import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const StyledTreeIndent = styled.span`
  padding-left: ${props => props.theme.global.edgeSize.medium};
`;

export const TableTreeIndent = withTheme(({ level, theme }) => Array.from({ length: level })
  .map((value, currentLevel) => (
    <StyledTreeIndent
      key={currentLevel}
      theme={theme}
    />
  )));

TableTreeIndent.propTypes = {
  level: PropTypes.number,
};

TableTreeIndent.defaultProps = {
  level: 0,
};
