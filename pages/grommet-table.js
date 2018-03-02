import { Box, Text, Image, CheckBox } from 'grommet';
import { Add, Subtract } from 'grommet-icons';
import doc from '../components/grommet/grommet-table/doc';
import Doc from '../components/Doc';
import Table from '../components/grommet/grommet-table/Table';

const desc = doc(Table).toJSON();


class GrommetTable extends React.Component {
  state = {
    grouping: false,
    filterable: true,
    sortable: true,
    data: [
      {
        item: 'Fork', qty: 4, price: 5.50, image: 'http://lorempixel.com/output/food-q-c-264-260-2.jpg',
      },
      {
        item: 'Fork', qty: 1, price: 5.20, image: 'http://lorempixel.com/output/nightlife-q-c-264-260-4.jpg',
      },
      {
        item: 'Knife', qty: 3, price: 2.50, image: 'http://lorempixel.com/output/nature-q-c-264-260-7.jpg',
      },
      {
        item: 'Spoon', qty: 2, price: 6.50, image: 'http://lorempixel.com/output/sports-q-c-264-260-1.jpg',
      },
      {
        item: 'Plate', qty: 1, price: 12.49, image: 'http://lorempixel.com/output/people-q-c-264-260-2.jpg',
      },
      {
        item: 'Glass', qty: 2, price: 8.25, image: 'http://lorempixel.com/output/abstract-q-c-264-260-7.jpg',
      },
    ],
  };
  render() {
    const {
      data, grouping, sortable, filterable,
    } = this.state;
    return (
      <Box>
        <Doc
          name='Grommet Table'
          desc={desc}
          example={(
            <Box gap='small'>
              <Box direction='row' justify='between'>
                <CheckBox checked={grouping} label='Group rows' onClick={() => this.setState({ grouping: !grouping })} />
                <CheckBox checked={sortable} label='Sortable' onClick={() => this.setState({ sortable: !sortable })} />
                <CheckBox checked={filterable} label='Filter' onClick={() => this.setState({ filterable: !filterable })} />
              </Box>
              <Table
                key={grouping}
                pivotBy={grouping ? ['item'] : undefined}
                decorations={{
                  table: { elevation: 'large', border: 'all' },
                  headerGroup: {
                    background: 'brand', border: 'horizontal', size: 'large', align: 'center',
                  },
                  header: { border: 'all', align: 'center' },
                  filter: { background: 'light-2', border: 'all' },
                  filterInput: { size: 'small', placeholder: 'Filter...' },
                  body: { animation: { type: 'fadeIn', duration: 2000, size: 'large' } },
                  rowOdd: {
                    background: { color: 'light-1', opacity: 'medium' },
                  },
                  footer: { background: 'light-1' },
                  pagination: { pad: { top: 'medium' } },
                  expander: { CloseIcon: <Subtract color='brand' />, OpenIcon: <Add color='brand' /> },
                }}
                SubComponent={row => (
                  <Box
                    direction='row'
                    pad='small'
                    gap='medium'
                    round='medium'
                    border={{ color: 'brand', size: 'large' }}
                    background='light-1'
                  >
                    <Image src={row.original.image} />
                    <Box>
                      <div><strong>Item: </strong>{row.original.item}</div>
                      <div><strong>Qty: </strong>{row.original.qty}</div>
                      <div><strong>Price: </strong>{row.original.price}</div>
                    </Box>
                  </Box>
                )}
                defaultPageSize={4}
                filterable={filterable}
                sortable={sortable}
                pageSizeOptions={[2, 4, 6]}
                columns={[
                  {
                    Header: 'Item',
                    decorations: {
                      header: {
                        align: 'start',
                      },
                    },
                    accessor: 'item',
                  },
                  {
                    Header: 'Inventory',
                    columns: [
                      {
                        Header: 'Qty',
                        accessor: 'qty',
                        decorations: {
                          cell: {
                            align: 'end',
                          },
                        },
                        // aggregate: vals => `Total ${vals.reduce((a, b) => a + b, 0)}`,
                      }, {
                        Header: 'Price',
                        accessor: 'price',
                        decorations: {
                          cell: {
                            align: 'end',
                          },
                        },
                        // aggregate: vals => `Sum ${vals.reduce((a, b) => a + b, 0)}`,
                      }, {
                        Header: 'Total',
                        id: 'total',
                        decorations: {
                          cell: {
                            background: { color: 'light-1' },
                            align: 'end',
                            color: 'brand',
                            size: 'large',
                          },
                        },
                        Cell: props => (
                          props.original ? props.original.price * props.original.qty : 0
                        ),
                        Footer: cell => (
                          <Text>{`Sum ${cell.data.reduce((a, b) => (a + b.price), 0)}`}</Text>
                        ),
                      },
                    ],
                  },
                ]}
                data={data}
              />
            </Box>
          )}
        />
      </Box>
    );
  }
}

export default GrommetTable;
