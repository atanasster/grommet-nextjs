/*
import React from 'react';
import {
  SummaryState,
  TreeDataState,
  CustomTreeData,
  IntegratedSummary,
  DataTypeProvider,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableTreeColumn,
  TableSummaryRow,
} from 'dx-react-grid-grommet';

import {
  generateRows,
  globalSalesValues,
} from '../../../data/dx-grid-data/generator';
*/

const CurrencyFormatter = ({ value }) => `$${value}`;

const CurrencyTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={CurrencyFormatter}
    {...props}
  />
);

const getChildRows = (row, rootRows) => {
  const childRows = rootRows.filter(r => r.parentId === (row ? row.id : null));
  return childRows.length ? childRows : null;
};

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
        { columnName: 'region', width: 250 },
        { columnName: 'amount', align: 'right' },
      ],
      totalSummaryItems: [
        { columnName: 'region', type: 'count' },
      ],
      treeSummaryItems: [
        { columnName: 'region', type: 'count' },
        { columnName: 'amount', type: 'sum' },
      ],
      currencyColumns: ['amount'],
      data: generateRows({
        columnValues: {
          id: ({ index }) => index,
          parentId: ({ index, random }) => (index > 0 ? Math.trunc((random() * index) / 2) : null),
          ...globalSalesValues,
        },
        length: 200,
      }),
    };
  }

  render() {
    const {
      data, columns, tableColumnExtensions, currencyColumns, totalSummaryItems, treeSummaryItems,
    } = this.state;

    return (
      <Grid
        rows={data}
        columns={columns}
      >
        <CurrencyTypeProvider
          for={currencyColumns}
        />
        <TreeDataState />
        <SummaryState
          totalItems={totalSummaryItems}
          treeItems={treeSummaryItems}
        />
        <CustomTreeData
          getChildRows={getChildRows}
        />
        <IntegratedSummary />
        <VirtualTable
          columnExtensions={tableColumnExtensions}
        />
        <TableHeaderRow />
        <TableTreeColumn
          for="region"
        />
        <TableSummaryRow />
      </Grid>
    );
  }
}

render(<Demo />);
