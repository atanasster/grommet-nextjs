// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <Box align='center'>
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
      ]}
      sortable={true}
    />
  </Box>  
);

render(<Demo />);  
`;
