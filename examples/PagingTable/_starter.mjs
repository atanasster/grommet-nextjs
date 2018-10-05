// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <PagingTable
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
    ]}
  />
);

render(<Demo />);  
`;
