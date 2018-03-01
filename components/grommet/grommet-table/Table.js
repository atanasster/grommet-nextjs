import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withTheme } from 'grommet/components/hocs';
import StyledTable from './StyledTable';

class GrommetTable extends Component {
  static contextTypes = {
    grommet: PropTypes.object,
  };

  // eslint-disable-next-line no-unused-vars
  static defaultFilter(filter, row, column) {
    const id = filter.pivotId || filter.id;
    if (row[id] !== undefined && filter.value !== undefined) {
      return String(row[id])
        .toUpperCase()
        .startsWith(filter.value.toUpperCase());
    }
    return true;
  }

  render() {
    const { theme, ...rest } = this.props;
    const { grommet } = this.context;
    const defaults = {
      defaultFilterMethod: GrommetTable.defaultFilter,
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
