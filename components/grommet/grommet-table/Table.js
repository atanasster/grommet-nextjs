import React, { Component } from 'react';
import StyledTable from './StyledTable';

export default class GrommetTable extends Component {
  render() {
    const { props } = this;
    const defaults = {
      showPagination: props.data && props.data.length > (props.defaultPageSize || 20),
      minRows: props.data && props.data.length < (props.defaultPageSize || 20) ? 0 : undefined,
    };
    const newProps = { ...defaults, ...props };
    return (
      <StyledTable
        {...newProps}
      />
    );
  }
}
