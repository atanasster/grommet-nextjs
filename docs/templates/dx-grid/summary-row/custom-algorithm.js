/*
import React from 'react';
import {
  SummaryState,
  IntegratedSummary,
  DataTypeProvider,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSummaryRow,
} from 'dx-react-grid-grommet';

import {
  generateRows,
  globalSalesValues,
} from '../../../data/dx-grid-data/generator';
*/

const summaryCalculator = (type, rows, getValue) => {
  if (type === 'median') {
    if (!rows.length) {
      return null;
    }
    const sortedRows = rows.sort((a, b) => getValue(a) - getValue(b));
    if (rows.length % 2 === 1) {
      return getValue(sortedRows[(sortedRows.length + 1) / 2]);
    }
    const halfIndex = sortedRows.length / 2;
    return (getValue(sortedRows[halfIndex]) + getValue(sortedRows[halfIndex + 1])) / 2;
  }
  return IntegratedSummary.defaultCalculator(type, rows, getValue);
};

const messages = {
  median: 'Median',
};

const CurrencyFormatter = ({ value }) => `$${value}`;

const CurrencyTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={CurrencyFormatter}
    {...props}
  />
);

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'amount', title: 'Sale Amount' },
      ],
      tableColumnExtensions: [
        { columnName: 'amount', align: 'right' },
      ],
      totalSummaryItems: [
        { columnName: 'amount', type: 'avg' },
        { columnName: 'amount', type: 'median' },
      ],
      currencyColumns: ['amount'],
      rows: generateRows({ columnValues: globalSalesValues, length: 8 }),
    };
  }

  render() {
    const {
      rows, columns, tableColumnExtensions, currencyColumns, totalSummaryItems,
    } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <CurrencyTypeProvider
          for={currencyColumns}
        />
        <SummaryState
          totalItems={totalSummaryItems}
        />
        <IntegratedSummary
          calculator={summaryCalculator}
        />
        <Table
          columnExtensions={tableColumnExtensions}
        />
        <TableHeaderRow />
        <TableSummaryRow
          messages={messages}
        />
      </Grid>
    );
  }
}

render(<Demo />);
