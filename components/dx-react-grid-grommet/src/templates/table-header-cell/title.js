import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.span`
  overflow: hidden;
  textOverflow: ellipsis;
`;

const TitelBase = ({
  children, ...restProps
}) => (
  <StyledTitle
    {...restProps}
  >
    {children}
  </StyledTitle>
);

TitelBase.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

TitelBase.defaultProps = {
  children: undefined,
};

export const Title = TitelBase;
