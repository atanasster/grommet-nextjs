import { Box, Heading, Paragraph } from 'grommet';
import Page from '../components/Page';
import Section from '../components/Section';
import Item from '../components/Item';
import Table from '../components/grommet/grommet-table/Table';

export default class Home extends React.Component {
  render() {
    return (
      <Page title='Add ons'>
        <Box pad='large'>
          <Box direction='row' gap='xlarge'>
            <Box margin={{ top: 'large' }} basis='medium' overflow='hidden'>
              <Heading level={1}>
                <strong>Add-ons</strong>
              </Heading>
              <Paragraph size='large' margin='none'>
                Various components and code, created by grommet users just like you.
              </Paragraph>
            </Box>
          </Box>
        </Box>
        <Box pad={{ horizontal: 'large' }}>
          <Section align='stretch' name='Presentation' index={0}>
            <Item name='grommet-table' path='/grommet-table'>
              <Table
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
            </Item>
          </Section>
        </Box>
      </Page>
    );
  }
}
