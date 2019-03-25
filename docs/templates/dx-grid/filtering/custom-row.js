/*
import React from 'react';
import { NumberInput } from 'grommet-controls';
import { TableCell } from 'dx-react-grid-grommet/grommet';
import {
  FilteringState,
  IntegratedFiltering,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
} from 'dx-react-grid-grommet';

import {
  generateRows,
  globalSalesValues,
} from '../../../data/dx-grid-data/generator';
*/

const UnitsFilterCell = ({ filter, onFilter }) => (
  <TableCell >
    <NumberInput
      value={filter ? filter.value : ''}
      onChange={e => onFilter(e.target.value ? { value: e.target.value } : null)}
      placeholder="Filter..."
      min={1}
      max={4}
    />
  </TableCell>
);

const FilterCell = (props) => {
  const { column } = props;
  if (column.name === 'units') {
    return <UnitsFilterCell {...props} />;
  }
  return <TableFilterRow.Cell {...props} />;
};

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'product', title: 'Product' },
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'units', title: 'Quantity' },
      ],
      tableColumnExtensions: [
        { columnName: 'units', align: 'right' },
      ],
      rows: generateRows({ columnValues: globalSalesValues, length: 8 }),
    };
  }

  render() {
    const { rows, columns, tableColumnExtensions } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <FilteringState defaultFilters={[{ columnName: 'units', value: 2 }]} />
        <IntegratedFiltering />
        <Table
          columnExtensions={tableColumnExtensions}
        />
        <TableHeaderRow />
        <TableFilterRow
          cellComponent={FilterCell}
        />
      </Grid>
    );
  }
}

render(<Demo />);
