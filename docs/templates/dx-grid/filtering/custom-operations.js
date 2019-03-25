/*
import React from 'react';
import { FilteringState, IntegratedFiltering, DataTypeProvider } from '@devexpress/dx-react-grid';
import {
  Grid, Table, TableHeaderRow, TableFilterRow,
} from 'dx-react-grid-grommet';
import { NumberInput } from 'grommet-controls';
import { Calendar } from 'grommet-icons';

import { generateRows, globalSalesValues } from '../../../data/dx-grid-data/generator';
*/

const FilterIcon = ({ type, ...restProps }) => {
  if (type === 'month') return <Icons.Calendar {...restProps} />;
  return <TableFilterRow.Icon type={type} {...restProps} />;
};

const CurrencyEditor = ({ value, onValueChange, classes }) => {
  const handleChange = (event) => {
    const { value: targetValue } = event.target;
    if (targetValue.trim() === '') {
      onValueChange();
      return;
    }
    onValueChange(parseInt(targetValue, 10));
  };
  return (
    <NumberInput
      value={value === undefined ? '' : value}
      min={0}
      placeholder='Filter...'
      onChange={handleChange}
    />
  );
};

CurrencyEditor.propTypes = {
  value: PropTypes.number,
  onValueChange: PropTypes.func.isRequired,
};

CurrencyEditor.defaultProps = {
  value: undefined,
};

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'saleDate', title: 'Sale Date' },
        { name: 'amount', title: 'Sale Amount' },
      ],
      rows: generateRows({ columnValues: globalSalesValues, length: 8 }),
      dateColumns: ['saleDate'],
      dateFilterOperations: ['month', 'contains', 'startsWith', 'endsWith'],
      currencyColumns: ['amount'],
      currencyFilterOperations: ['equal', 'notEqual', 'greaterThan', 'greaterThanOrEqual', 'lessThan', 'lessThanOrEqual'],
      filteringColumnExtensions: [
        {
          columnName: 'saleDate',
          predicate: (value, filter, row) => {
            if (!filter.value.length) return true;
            if (filter && filter.operation === 'month') {
              const month = parseInt(value.split('-')[1], 10);
              return month === parseInt(filter.value, 10);
            }
            return IntegratedFiltering.defaultPredicate(value, filter, row);
          },
        },
      ],
    };
  }

  render() {
    const {
      rows, columns, dateColumns, dateFilterOperations, filteringColumnExtensions,
      currencyColumns, currencyFilterOperations,
    } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <DataTypeProvider
          for={dateColumns}
          availableFilterOperations={dateFilterOperations}
        />
        <DataTypeProvider
          for={currencyColumns}
          availableFilterOperations={currencyFilterOperations}
          editorComponent={CurrencyEditor}
        />
        <FilteringState defaultFilters={[]} />
        <IntegratedFiltering columnExtensions={filteringColumnExtensions} />

        <Table />
        <TableHeaderRow />
        <TableFilterRow
          showFilterSelector
          iconComponent={FilterIcon}
          messages={{ month: 'Month equals' }}
        />
      </Grid>
    );
  }
}

render(<Demo />);
