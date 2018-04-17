import React, { Component } from 'react';
import StyledPagingTable from './StyledPagingTable';

export default class PagingTable extends Component {
  render() {
    const { data, ...rest } = this.props;
    const defaults = {
      showPagination: (rest.onFetchData !== undefined) ||
      (data && data.length > (rest.defaultPageSize || 20)),
      minRows: data && data.length < (rest.defaultPageSize || 20) ? 0 : undefined,
    };
    const newProps = { ...defaults, ...rest };
    return (
      <StyledPagingTable
        data={data || []}
        {...newProps}
      />
    );
  }
}
