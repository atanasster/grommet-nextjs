import React from 'react';
import PropTypes from 'prop-types';
import { StyledTrGroupComponent } from './StyledTable';

const TrGroupComponent = props => <StyledTrGroupComponent role='rowgroup' {...props} />;

TrGroupComponent.contextTypes = {
  tableContext: PropTypes.string,
};

export default TrGroupComponent;
