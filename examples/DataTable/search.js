export const search = `const Demo = () => (
  <DataTable
    columns={[
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
    ]}
    data={[
      { name: 'Alan', percent: 20 },
      { name: 'Bryan', percent: 30 },
      { name: 'Chris', percent: 40 },
      { name: 'Eric', percent: 80 },
      { name: 'Doug', percent: 60 },
      { name: 'Jet', percent: 40 },
      { name: 'Michael', percent: 50 },
      { name: 'Tracy', percent: 10 },
    ]}
    sortable={true}
  />
);

render(<Demo />);  
`;
