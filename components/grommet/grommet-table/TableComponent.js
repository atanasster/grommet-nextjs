import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withTheme } from 'grommet/components/hocs';
import { StyledTableComponent } from './StyledTable';

class TableComponent extends Component {
  static contextTypes = {
    grommet: PropTypes.object,
  };

  static childContextTypes = {
    grommet: PropTypes.object,
  };
  getChildContext() {
    return { grommet: this.context.grommet };
  }
  render() {
    return (
      <StyledTableComponent
        role='grid'
        {...this.props}
      />
    );
  }
}

export default compose(withTheme)(TableComponent);
