import React from 'react';

import { Box, DataTable, Meter, Text } from 'grommet';

import { doc } from 'grommet/components/DataTable/doc';

import Doc from '../components/Doc';

const desc = doc(DataTable).toJSON();

const columns = [
  {
    property: 'name',
    header: <Text>Name</Text>,
    primary: true,
    search: true,
  },
  {
    property: 'percent',
    header: 'Complete',
    render: datum => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter values={[{ value: datum.percent }]} thickness='small' size='small' />
      </Box>
    ),
  },
];

const data = [
  { name: 'Alan', percent: 20 },
  { name: 'Bryan', percent: 30 },
  { name: 'Chris', percent: 40 },
  { name: 'Eric', percent: 80 },
  { name: 'Doug', percent: 60 },
  { name: 'Jet', percent: 40 },
  { name: 'Michael', percent: 50 },
  { name: 'Tracy', percent: 10 },
];

export default () => (
  <Doc
    name='DataTable'
    desc={desc}
    example={(
      <DataTable columns={columns} data={data} sortable={true} />
    )}
  />
);
