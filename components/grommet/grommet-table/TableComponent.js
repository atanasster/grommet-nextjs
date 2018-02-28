import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withTheme } from 'grommet/components/hocs';
import { StyledTableComponent } from './StyledTable';

class TableComponent extends Component {
  static contextTypes = {
    grommet: PropTypes.object,
  };

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
