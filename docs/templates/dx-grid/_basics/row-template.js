/*
import React from 'react';
import styled from 'styled-components';
import {
  Grid,
  Table,
  TableHeaderRow,
} from 'dx-react-grid-grommet';

import {
  generateRows,
  globalSalesValues,
} from '../../../data/dx-grid-data/generator';
*/

const sectorColorMap = {
  banking: '#f5f5f5',
  health: '#a2e2a4',
  telecom: '#b3e5fc',
  energy: '#ffcdd2',
  insurance: '#f0f4c3',
};

const SectorTableRow = styled(Table.Row)`
  ${props => `
    background-color: ${sectorColorMap[props.sector]};
    cursor: pointer; 
  `}
`;


const TableRow = ({ row, ...rest }) => (
  <SectorTableRow
    onClick={() => alert(JSON.stringify(row))}
    sector={row.sector.toLowerCase()}
    {...rest}
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
      rows: generateRows({ columnValues: globalSalesValues, length: 8 }),
    };
  }

  render() {
    const { rows, columns } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <Table rowComponent={TableRow} />
        <TableHeaderRow />
      </Grid>
    );
  }
}

render(<Demo />);
