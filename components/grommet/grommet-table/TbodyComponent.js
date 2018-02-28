import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withTheme } from 'grommet/components/hocs';
import { StyledTableBodyComponent } from './StyledTable';


class TbodyComponent extends Component {
  static childContextTypes = {
    grommet: PropTypes.object,
  }

  getChildContext() {
    const { grommet } = this.context;
    return { grommet: { ...grommet, tableContext: 'body' } };
  }

  render() {
    return <StyledTableBodyComponent {...this.props} />;
  }
}

export default compose(withTheme)(TbodyComponent);
