/*
import React from 'react';
import { DataTypeProvider } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableBandHeader,
  TableHeaderRow,
} from 'dx-react-grid-grommet';
import { Box, Text } from 'grommet';
import { PieChart, BarChart, Group } from 'grommet-icons';
import { countries } from '../../../../data/dx-grid-data/countries';
*/

const PercentFormatter = ({ value }) => (
  <Text>
    {value}
    %
  </Text>
);

const PercentTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={PercentFormatter}
    {...props}
  />
);

const BandCell = ({
  children, tableRow, tableColumn, column, ...rest
}) => {
  let icon = null;
  if (column.title === 'Population') icon = <Icons.Group />;
  if (column.title === 'Nominal GDP') icon = <Icons.BarChart  />;
  if (column.title === 'By Sector') icon = <Icons.PieChart />;
  return (
    <TableBandHeader.Cell
      {...rest}
      column={column}
    >
      <Box direction='row' align='center' gap='small'>
        <Text weight='bold'>
          {children}
        </Text>
        {icon}
      </Box>
    </TableBandHeader.Cell>
  );
};



const HeaderCell = ({ children, ...rest }) => (
  <TableHeaderRow.Cell
    {...rest}
  >
    <Text color='lighgt-5'>{children}</Text>
  </TableHeaderRow.Cell>
);

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { name: 'Country', title: 'Country' },
        { name: 'Area', title: 'Area, sq. km.' },
        { name: 'Population_Total', title: 'Total' },
        { name: 'Population_Urban', title: 'Urban' },
        { name: 'GDP_Total', title: 'Total, min $' },
        { name: 'GDP_Industry', title: 'Industry' },
        { name: 'GDP_Services', title: 'Services' },
        { name: 'GDP_Agriculture', title: 'Agriculture' },
      ],
      columnBands: [
        {
          title: 'Population',
          children: [
            { columnName: 'Population_Total' },
            { columnName: 'Population_Urban' },
          ],
        },
        {
          title: 'Nominal GDP',
          children: [
            { columnName: 'GDP_Total' },
            {
              title: 'By Sector',
              children: [
                { columnName: 'GDP_Agriculture' },
                { columnName: 'GDP_Industry' },
                { columnName: 'GDP_Services' },
              ],
            },
          ],
        },
      ],
      tableColumnExtensions: [
        { columnName: 'Area', width: 155, align: 'right' },
        { columnName: 'Population_Total', width: 110, align: 'right' },
        { columnName: 'Population_Urban', width: 75, align: 'right' },
        { columnName: 'GDP_Total', width: 135, align: 'right' },
        { columnName: 'GDP_Industry', width: 100, align: 'right' },
        { columnName: 'GDP_Services', width: 100, align: 'right' },
        { columnName: 'GDP_Agriculture', width: 130, align: 'right' },
      ],
      percentColumns: ['GDP_Industry', 'GDP_Services', 'GDP_Agriculture', 'Population_Urban'],
    };
  }

  render() {
    const {
      columns, tableColumnExtensions, columnBands, percentColumns,
    } = this.state;

    return (
      <Grid
        rows={countries}
        columns={columns}
      >
        <PercentTypeProvider
          for={percentColumns}
        />
        <Table
          columnExtensions={tableColumnExtensions}
        />
        <TableHeaderRow
          cellComponent={HeaderCell}
        />
        <TableBandHeader
          columnBands={columnBands}
          cellComponent={BandCell}
        />
      </Grid>
    );
  }
}

render(<Demo />);
