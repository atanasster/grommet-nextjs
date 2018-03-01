import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withTheme } from 'grommet/components/hocs';
import { StyledTfootComponent } from '../StyledTable';

export default props => <StyledTfootComponent {...props} />;
