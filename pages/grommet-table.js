import { Box } from 'grommet';
import doc from '../components/grommet/grommet-table/doc';
import Doc from '../components/Doc';
import Table from '../components/grommet/grommet-table/Table';

const desc = doc(Table).toJSON();

export default () => (
  <Box>
    <Doc
      name='Grommet Table'
      desc={desc}
      example={(
        <Table
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
            },
          ]}
          data={[
            { item: 'Fork', qty: 4, price: 5.50 },
            { item: 'Knife', qty: 3, price: 2.50 },
            { item: 'Spoon', qty: 2, price: 6.50 },
            { item: 'Plate', qty: 1, price: 12.49 },
            { item: 'Glass', qty: 2, price: 8.25 },
          ]}
        />
      )}
    />
  </Box>
);
