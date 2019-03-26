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
  if (type === 'overpriced') {
    return rows.filter(row => getValue(row) > 6000).length;
  }
  return IntegratedSummary.defaultCalculator(type, rows, getValue);
};

const formatlessSummaryTypes = ['overpriced'];

const messages = {
  overpriced: 'Price higher than $6000',
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
        { name: 'sector', title: 'Sector' },
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'amount', title: 'Sale Amount' },
      ],
      tableColumnExtensions: [
        { columnName: 'amount', align: 'right', width: 280 },
      ],
      totalSummaryItems: [
        { columnName: 'amount', type: 'overpriced' },
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
          formatlessSummaryTypes={formatlessSummaryTypes}
          messages={messages}
        />
      </Grid>
    );
  }
}

render(<Demo />);
