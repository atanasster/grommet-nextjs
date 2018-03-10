import { Box, Heading, Paragraph } from 'grommet';
import Page from '../../components/Page';
import Section from '../../components/Section';
import Item from '../../components/Item';
import Table from '../../components/grommet/grommet-table/Table';
import { GrommetSelect } from '../../components/grommet/grommet-multiselect/index';
import { GrommetTags } from '../../components/grommet/grommet-tags/index';
import { GrommetTag } from '../../components/grommet/grommet-tag/index';
import { GrommetNotification } from '../../components/grommet/grommet-notification/index';
import { MaskedInput } from '../../components/grommet/MaskedInput';
import { DateInput } from '../../components/grommet/DateInput';
import { NumberInput } from '../../components/grommet/NumberInput';


export default class AddOns extends React.Component {
  state = {
    options: ['one', 'two', 'three', 'four', 'five'],
    selected: ['one', 'five'],
    date: undefined,
    phone: '3047245566',
    number: 12345.23,
  };
  render() {
    const {
      options, selected, date, phone, number,
    } = this.state;
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
            <Item name='grommet-table' path='/add-ons/grommet-table'>
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
            <Item name='Tag' path='/add-ons/grommet-tag' center={true}>
              <GrommetTag
                label='Tag'
                background='accent-1'
                onChange={({ option }) => this.setState({ selected: option })}
              />
            </Item>
            <Item name='Notification' path='/add-ons/grommet-notification' center={true}>
              <GrommetNotification
                message='Notification'
                onClose={() => {}}
                timestamp={new Date()}
                percentComplete={30}
                strong={true}
                status='warning'
              />
            </Item>
          </Section>
          <Section align='stretch' name='Controls' index={0}>
            <Item name='Select' path='/add-ons/grommet-multiselect' center={true}>
              <GrommetSelect
                options={options}
                onChange={({ option }) => this.setState({ selected: option })}
                placeholder='Multiselect'
                tabIndex='-1'
                multiple={true}
                value={selected}
              />
            </Item>
            <Item name='Tags' path='/add-ons/grommet-tags' center={true}>
              <GrommetTags
                value={selected}
                onChange={({ option }) => this.setState({ selected: option })}
                placeholder='Multiselect'
                tabIndex='-1'
              />
            </Item>
            <Item name='MaskedInput' path='/add-ons/maskedinput' center={true}>
              <MaskedInput
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholder='US Phone'
                value={phone}
                onChange={({ value }) => this.setState({ phone: value })}
                showMask={false}
              />
            </Item>
            <Item name='DateInput' path='/add-ons/dateinput' center={true}>
              <DateInput
                value={date}
                onChange={({ value }) => this.setState({ date: value })}
                placeholder='DD/MM/YYYY'
              />
            </Item>
            <Item name='NumberInput' path='/add-ons/numberinput' center={true}>
              <NumberInput
                value={number}
                onChange={({ value }) => this.setState({ number: value })}
              />
            </Item>
          </Section>
        </Box>
      </Page>
    );
  }
}
