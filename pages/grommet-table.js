import { Box, Text } from 'grommet';
import doc from '../components/grommet/grommet-table/doc';
import Doc from '../components/Doc';
import Table from '../components/grommet/grommet-table/Table';

const desc = doc(Table).toJSON();

const data = [
  { item: 'Fork', qty: 4, price: 5.50 },
  { item: 'Fork', qty: 1, price: 5.20 },
  { item: 'Knife', qty: 3, price: 2.50 },
  { item: 'Spoon', qty: 2, price: 6.50 },
  { item: 'Plate', qty: 1, price: 12.49 },
  { item: 'Glass', qty: 2, price: 8.25 },
];
export default () => (
  <Box>
    <Doc
      name='Grommet Table'
      desc={desc}
      example={(
        <Table
          table={{ elevation: 'large', border: 'all' }}
          header={{ background: 'brand', border: 'all' }}
          filter={{ background: 'light-2', border: 'all' }}
          footer={{ background: 'light-1' }}
          pagination={{ pad: { top: 'medium' } }}
          SubComponent={row => (
            <Box pad='small' background='light-1'>
              <div><strong>Item: </strong>{row.original.item}</div>
              <div><strong>Qty: </strong>{row.original.qty}</div>
              <div><strong>Price: </strong>{row.original.price}</div>
            </Box>
              )}
          defaultPageSize={4}
          filterable={true}
          pageSizeOptions={[2, 4, 6]}
          columns={[
            {
              Header: 'Item',
              accessor: 'item',
            },
            {
              Header: 'Inventory',
                columns: [
                  {
                    Header: 'Qty',
                    accessor: 'qty',
                    aggregate: vals => `Total ${vals.reduce((a, b) => a + b, 0)}`,
                  }, {
                    Header: 'Price',
                    accessor: 'price',
                    aggregate: vals => `Sum ${vals.reduce((a, b) => a + b, 0)}`,
                  }, {
                    Header: 'Total',
                    Cell: props => (
                      props.original ? props.original.price * props.original.qty : ''
                    ),
                    Footer: cell => (
                      <Text >{`${cell.data.length}`}</Text>
                    ),
                  },
                ],
              },
            ]}
          data={data}
        />
      )}
    />
  </Box>
);
