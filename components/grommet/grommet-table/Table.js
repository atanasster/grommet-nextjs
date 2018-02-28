import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import classnames from 'classnames';
import { Box, TextInput } from 'grommet';
import { withTheme } from 'grommet/components/hocs';
import StyledTable from './StyledTable';
import PaginationComponent from './Pagination';
import TableComponent from './TableComponent';
import TheadComponent from './TheadComponent';
import TrComponent from './TrComponent';
import ThComponent from './ThComponent';
import TdComponent from './TdComponent';

const TbodyComponent = ({ children, className, ...rest }) => (
  <Box
    {...rest}
  >
    {children}
  </Box>
);

const NoDataComponent = ({ children, ...rest }) => (
  <Box {...rest} align='center' pad='small'>
    {children}
  </Box>
);

const FilterComponent = (props) => {
  const { filter, onChange, column } = props;
  return (
    <TextInput
      aria-label={`Filter data by ${typeof column.Header === 'string' ? column.Header : column.id}`}
      value={filter ? filter.value : ''}
      onChange={event => onChange(event.target.value)}
    />);
};

const TrGroupComponent = ({ children, className, ...rest }) => (
  <Box
    direction='row'
    className={classnames('rt-tr-group', className)}
    role='rowgroup'
    {...rest}
  >
    {children}
  </Box>
);

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
