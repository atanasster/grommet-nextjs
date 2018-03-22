import React, { Component } from 'react';
import StyledTable from './StyledTable';

export default class GrommetTable extends Component {
  render() {
    const { data, ...rest } = this.props;
    const defaults = {
      showPagination: (rest.onFetchData !== undefined) ||
      (data && data.length > (rest.defaultPageSize || 20)),
      minRows: data && data.length < (rest.defaultPageSize || 20) ? 0 : undefined,
    };
    const newProps = { ...defaults, ...rest };
    return (
      <StyledTable
        data={data || []}
        {...newProps}
      />
    );
  }
}
