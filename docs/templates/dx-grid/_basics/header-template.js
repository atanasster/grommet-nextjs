/*
import React from 'react';
import { Button } from 'grommet';
import { FormViewHide } from 'grommet-icons';
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

const TableHeaderContent = ({
  column, children, ...rest
}) => (
  <TableHeaderRow.Content
    column={column}
    {...rest}
  >
    {children}
    {column.name === 'region' ? (
      <Button
        onClick={() => alert('Custom action')}
        icon={<Icons.FormViewHide />}
      />
    ) : null}
  </TableHeaderRow.Content>
);


class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'customer', title: 'Customer' },
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
        <Table />
        <TableHeaderRow
          contentComponent={TableHeaderContent}
        />
      </Grid>
    );
  }
}

render(<Demo />);
