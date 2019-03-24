/*
import React from 'react';
import styled from 'styled-components';
import {
  Grid,
  Table,
  TableHeaderRow,
} from 'dx-react-grid-grommet';
import { getRGBA } from 'grommet/utils/colors';
import {
  generateRows,
  globalSalesValues,
}  from '../../../data/dx-grid-data/generator';
*/

const StripedTable = styled(Table.Table)`
  & > tbody tr:nth-of-type(odd){
    background-color: ${props => getRGBA(props.theme.global.colors.brand, 0.3)};
  }
`;



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
        <Table
          tableComponent={StripedTable}
        />
        <TableHeaderRow />
      </Grid>
    );
  }
}

render(<Demo />);
