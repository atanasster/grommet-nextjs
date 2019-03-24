/*
import React from 'react';
import styled from 'styled-components';
import {
  Grid,
  Table,
  TableHeaderRow,
} from 'dx-react-grid-grommet';
import { Box, Text } from 'grommet';
import {
  generateRows,
  globalSalesValues,
} from '../../../data/dx-grid-data/generator';
*/

const TableCell = styled(Table.Cell)`
  ${props => props.value < 5000 && `
    background-color: red;
  `}
`;

const HighlightedCell = ({ value, ...rest }) => (
  <TableCell
    {...rest}
    value={value}
  >
    <Text
      color={value < 5000 ? 'white' : undefined}
    >
      {value}
    </Text>
  </TableCell>
);

const Cell = (props) => {
  const { column } = props;
  if (column.name === 'amount') {
    return <HighlightedCell {...props} />;
  }
  return <Table.Cell {...props} />;
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
          cellComponent={Cell}
        />
        <TableHeaderRow />
      </Grid>
    );
  }
}

render(<Demo />);
