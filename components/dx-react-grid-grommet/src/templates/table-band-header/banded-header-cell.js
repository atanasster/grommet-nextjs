import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderCellComponent = styled.div`
  vertical-align: middle;
`;

export const BandedHeaderCell = ({
  component, beforeBorder, ...restProps
}) => (
  <HeaderCellComponent
    scope='col'
    as={component}
    beforeBorder={beforeBorder}
    {...restProps}
  />
);

BandedHeaderCell.propTypes = {
  component: PropTypes.func.isRequired,
  beforeBorder: PropTypes.bool,
};

BandedHeaderCell.defaultProps = {
  beforeBorder: false,
};

