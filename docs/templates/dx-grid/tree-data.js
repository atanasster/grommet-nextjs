/*
import React from 'react';
import {
  DataTypeProvider,
  TreeDataState, SortingState, SelectionState, FilteringState, PagingState,
  CustomTreeData, IntegratedFiltering, IntegratedPaging, IntegratedSorting, IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table, TableHeaderRow, TableFilterRow, TableTreeColumn,
  PagingPanel, Toolbar, TableColumnVisibility, ColumnChooser,
} from 'dx-react-grid-grommet';
import { Box } from 'grommet';
import { tasks, employees, priorities } from '../../../data/dx-grid-data/data.json';
*/

const EmployeeFormatter = ({ row }) => (
  <Avatar
    image={`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/${employees.find(e => e.ID === row.Assigned_Employee_ID).Picture}`}
    alt='Avatar'
    title={employees.find(e => e.ID === row.Assigned_Employee_ID).Name}
  />
);

const getChildRows = (row, rows) => {
  const childRows = rows.filter(r => r.Parent_ID === (row ? row.ID : 0));
  return childRows.length ? childRows : null;
};

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'Subject', title: 'Task Subject' },
        { name: 'Assigned_Employee_ID', title: 'Assigned', getCellValue: row => employees.find(e => e.ID === row.Assigned_Employee_ID).Name },
        { name: 'Status', title: 'Status' },
        { name: 'Priority', title: 'Priority', getCellValue: row => priorities.find(p => p.ID === row.Priority).Value },
        { name: 'Completion', title: '% Completed', getCellValue: row => `${row.Completion}%` },
        { name: 'Start_Date', title: 'Start Date', getCellValue: row => row.Start_Date.split('T')[0] },
        { name: 'Due_Date', title: 'Due Date', getCellValue: row => row.Due_Date.split('T')[0] },
      ],
      rows: tasks,
      pageSizes: [5, 10, 20],
      defaultHiddenColumnNames: ['Priority', 'Completion'],
      tableColumnExtensions: [
        { columnName: 'Completion', align: 'right' },
      ],
      employeeColumns: ['Assigned_Employee_ID'],
    };
  }

  render() {
    const {
      rows, columns, pageSizes,
      defaultHiddenColumnNames, tableColumnExtensions, employeeColumns,
    } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <DataTypeProvider
          for={employeeColumns}
          formatterComponent={EmployeeFormatter}
        />

        <TreeDataState />
        <FilteringState />
        <SortingState />
        <SelectionState />
        <PagingState
          defaultCurrentPage={0}
          defaultPageSize={pageSizes[1]}
        />

        <CustomTreeData
          getChildRows={getChildRows}
        />
        <IntegratedFiltering />
        <IntegratedSelection />
        <IntegratedSorting />
        <IntegratedPaging />

        <Table
          columnExtensions={tableColumnExtensions}
        />
        <TableColumnVisibility
          defaultHiddenColumnNames={defaultHiddenColumnNames}
        />
        <TableHeaderRow
          showSortingControls={true}
        />
        <TableFilterRow />
        <TableTreeColumn
          for='Subject'
          showSelectionControls={true}
          showSelectAll={true}
        />

        <Toolbar />
        <ColumnChooser />

        <PagingPanel
          pageSizes={pageSizes}
        />
      </Grid>
    );
  }
}

render(<Demo />);
