import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withTheme } from 'grommet/components/hocs';
import StyledTable from './StyledTable';
import PaginationComponent from './components/Pagination';
import TableComponent from './components/TableComponent';
import TheadComponent from './components/TheadComponent';
import FilterComponent from './components/FilterComponent';
import TrComponent from './components/TrComponent';
import ThComponent from './components/ThComponent';
import TdComponent from './components/TdComponent';
import TfootComponent from './components/TfootComponent';
import TbodyComponent from './components/TbodyComponent';
import TrGroupComponent from './components/TrGroupComponent';
import ExpanderComponent from './components/ExpanderComponent';
import NoDataComponent from './components/NoDataComponent';
import LoadingComponent from './components/LoadingComponent';
import ResizerComponent from './components/ResizerComponent';

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
      ThComponent,
      TdComponent,
      PaginationComponent,
      NoDataComponent,
      FilterComponent,
      TableComponent,
      TheadComponent,
      TbodyComponent,
      TrGroupComponent,
      TrComponent,
      TfootComponent,
      ExpanderComponent,
      LoadingComponent,
      ResizerComponent,
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
