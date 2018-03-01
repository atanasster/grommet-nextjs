import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withTheme } from 'grommet/components/hocs';
import { StyledTHeadComponent } from '../StyledTable';

class TableHeaderComponent extends Component {
  static childContextTypes = {
    grommet: PropTypes.object,
  }

  getChildContext() {
    const { grommet } = this.context;
    return { grommet: { ...grommet, tableContext: 'header' } };
  }

  render() {
    return <StyledTHeadComponent {...this.props} />;
  }
}

export default compose(withTheme)(TableHeaderComponent);
