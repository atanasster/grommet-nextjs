import { Box, Text } from 'grommet';
import doc from '../components/grommet/grommet-table/doc';
import Doc from '../components/Doc';
import Table from '../components/grommet/grommet-table/Table';

const desc = doc(Table).toJSON();

const data = [
  { item: 'Fork', qty: 4, price: 5.50 },
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
            }, {
              Header: 'Qty',
              accessor: 'qty',
            }, {
              Header: 'Price',
              accessor: 'price',
            }, {
              Header: 'Total',
              Cell: props => (
                props.original.price * props.original.qty
              ),
              Footer: cell => (
                <Text >{`${cell.data.length}`}</Text>
              ),
            },
          ]}
          data={data}
        />
      )}
    />
  </Box>
);
