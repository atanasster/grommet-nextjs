import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withTheme } from 'grommet/components/hocs';
import { StyledTfootComponent } from '../StyledTable';

class TfootComponent extends Component {
  static childContextTypes = {
    grommet: PropTypes.object,
  }

  getChildContext() {
    const { grommet } = this.context;
    return { grommet: { ...grommet, tableContext: 'footer' } };
  }

  render() {
    return <StyledTfootComponent {...this.props} />;
  }
}

export default compose(withTheme)(TfootComponent);
