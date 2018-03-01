import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withTheme } from 'grommet/components/hocs';
import StyledTable from './StyledTable';

class GrommetTable extends Component {
  static contextTypes = {
    grommet: PropTypes.object,
  };

  render() {
    const { theme, ...rest } = this.props;
    const { grommet } = this.context;
    const defaults = {
      showPagination: rest.data && rest.data.length > (rest.defaultPageSize || 20),
      minRows: rest.data && rest.data.length < (rest.defaultPageSize || 20) ? 0 : undefined,
    };
    const props = { ...defaults, ...rest };
    return (
      <StyledTable
        {...props}
        theme={theme}
        grommet={grommet}
      />
    );
  }
}

export default compose(withTheme)(GrommetTable);
