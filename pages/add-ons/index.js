import { Box, Heading, Paragraph, Chart, Image, Anchor } from 'grommet';
import {
  Tags, Tag, Notification, DropInput, MaskedInput,
  DateInput, NumberInput, PasswordInput, EmailInput, ColorInput, Colors,
  Spinning, Form, ImageStamp, PagingTable, Card, Value, TextInputField, validators,
  materialColors, BarChart, HorizontalBarChart, LineChart, DoughnutChart, PieChart,
  PolarChart, RadarChart, ScatterChart,
} from 'grommet-controls';
import Page from '../../components/Page';
import Section from '../../components/Section';
import Item from '../../components/Item';
import { rndDatasets, rndDatasets2d } from '../../utils/data';

const CHART_VALUES = [
  { value: [7, 90], label: 'ninety' },
  { value: [6, 80], label: 'eighty' },
  { value: [5, 60], label: 'sixty' },
  { value: [4, 70], label: 'seventy' },
  { value: [3, 60], label: 'sixty' },
  { value: [2, 40], label: 'forty' },
  { value: [1, 30], label: 'thirty' },
  { value: [0, 10], label: 'ten' },
];

export default class AddOns extends React.Component {
  state = {
    selected: ['one', 'five'],
    date: undefined,
    phone: '3047245566',
    number: 12345.23,
  };
  render() {
    const {
      selected, date, phone, number,
    } = this.state;
    return (
      <Page title='grommet-controls'>
        <Box pad='large'>
          <Box direction='row' gap='xlarge'>
            <Box margin={{ top: 'large' }} basis='large' overflow='hidden'>
              <Anchor
                href='https://github.com/atanasster/grommet-controls'
                target='_blank'
                label={(
                  <Heading level={1}>
                    <strong>grommet-controls</strong>
                  </Heading>
                )}
                a11yTitle='Go to the github page for this project'
              />
              <Paragraph size='large' margin='none'>
                Package of additional grommet components
              </Paragraph>
            </Box>
          </Box>
        </Box>
        <Box pad={{ horizontal: 'large' }}>
          <Section align='stretch' name='Presentation' index={1}>
            <Item name='PagingTable' path='/add-ons/paging-table'>
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
            </Item>

            <Item name='Card' path='/add-ons/card' center={true}>
              <Card
                size={{ width: 'medium', height: 'small' }}
                backContent={(
                  <Paragraph>
  Lorem ipsum dolor sit amet, ad usu cetero interesset. Ut vix quidam verterem, ex ius lorem dicta
  error, ne meis referrentur vim. Eos purto noluisse adipisci te, verear feugait ad has, usu at
  tollit ponderum disputando. Ei sed diceret interesset, eu convenire omittantur cum. Est no
                  </Paragraph>
                )}
              >
                <Card.CardTitle border='bottom'>
                  Card
                </Card.CardTitle>
                <Card.CardContent>
                  <Image fit='contain' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='120' />
                </Card.CardContent>
              </Card>
            </Item>

            <Item name='Tag' path='/add-ons/tag' center={true}>
              <Tag
                label='Tag'
                background='accent-1'
                onChange={({ value }) => this.setState({ selected: value })}
              />
            </Item>
            <Item name='Notification' path='/add-ons/notification' center={true}>
              <Notification
                message='Notification'
                onClose={() => {}}
                timestamp={new Date()}
                percentComplete={30}
                strong={true}
                status='warning'
              />
            </Item>
            <Item name='Colors' path='/add-ons/colors' center={true}>
              <Colors
                size='small'
                onSelect={({ color }) => { alert(color); }}
                colors={materialColors}
              />
            </Item>
            <Item name='Spinning' path='/add-ons/spinning' center={true}>
              <Spinning />
            </Item>
            <Item name='ImageStamp' path='/add-ons/imagestamp' center={true}>
              <ImageStamp
                src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
                round='full'
                size='large'
              />
            </Item>
            <Item name='Value' path='/add-ons/value' center={true}>
              <Value value='30%' label='sales last quarter' color='status-ok' />
            </Item>
          </Section>
          <Section align='stretch' name='Controls' index={2}>
            <Item name='Tags' path='/add-ons/tags' center={true}>
              <Tags
                value={selected}
                onChange={({ value }) => this.setState({ selected: value })}
                placeholder='Multiselect'
              />
            </Item>
            <Item name='DropInput' path='/add-ons/dropinput' center={true}>
              <DropInput
                placeholder='annual sales'
                dropContent={(
                  <Box pad='small' align='center' gap='small'>
                    <Heading margin='none' level={3}>Monthly sales</Heading>
                    <Chart
                      aria-label='Chart example'
                      bounds={[[0, 7], [0, 100]]}
                      size={{ width: 'medium', height: 'small' }}
                      round={true}
                      values={CHART_VALUES}
                    />
                  </Box>)
                }
              />
            </Item>
            <Item name='MaskedInput' path='/add-ons/maskedinput' center={true}>
              <MaskedInput
                placeholderChar='_'
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholder='US Phone'
                value={phone}
                onChange={({ target: { value } }) => this.setState({ phone: value })}
                showMask={false}
              />
            </Item>

            <Item name='DateInput' path='/add-ons/dateinput' center={true}>
              <DateInput
                defaultValue={date}
                placeholder='DD/MM/YYYY'
                onChange={({ target: { value } }) => alert(value)}
              />
            </Item>
            <Item name='NumberInput' path='/add-ons/numberinput' center={true}>
              <NumberInput
                value={number}
                thousandsSeparatorSymbol=','
                onChange={({ target: { value } }) => this.setState({ number: value })}
              />
            </Item>
            <Item name='PasswordInput' path='/add-ons/passwordinput' center={true}>
              <PasswordInput
                defaultValue='password'
              />
            </Item>
            <Item name='EmailInput' path='/add-ons/emailinput' center={true}>
              <EmailInput
                defaultValue='john.smith@gmail.co.uk'
              />
            </Item>
            <Item name='ColorInput' path='/add-ons/colorinput' center={true}>
              <ColorInput
                colors={materialColors}
                defaultValue='#ff00aa'
              />
            </Item>
          </Section>
          <Section align='stretch' name='Form' index={3}>
            <Item name='Form' path='/add-ons/form' center={true}>
              <Form focusFirstChild={false} onSubmit={values => alert(JSON.stringify(values))}>
                <TextInputField label='Text' name='text' validation={[validators.required(), validators.minLength(8)]} />
              </Form>
            </Item>
          </Section>
          <Section align='stretch' name='Charts' index={4}>
            <Item name='BarChart' path='/add-ons/barchart' center={true}>
              <BarChart
                data={rndDatasets(2, { borderWidth: 1 })}
              />
            </Item>
            <Item name='HorizontalBarChart' path='/add-ons/horizontalbarchart' center={true}>
              <HorizontalBarChart
                data={rndDatasets(2, { borderWidth: 1 })}
              />
            </Item>
            <Item name='LineChart' path='/add-ons/linechart' center={true}>
              <LineChart
                data={rndDatasets(2, { fill: false })}
              />
            </Item>
            <Item name='DoughnutChart' path='/add-ons/doughnutchart' center={true}>
              <DoughnutChart
                data={rndDatasets(1)}
                options={{
                  legend: {
                    display: false,
                  },
                  themedData: true,
                }}
              />
            </Item>
            <Item name='PieChart' path='/add-ons/piechart' center={true}>
              <PieChart
                data={rndDatasets(1)}
                options={{
                  legend: {
                    display: false,
                  },
                  themedData: true,
                }}
              />
            </Item>
            <Item name='PolarChart' path='/add-ons/polarchart' center={true}>
              <PolarChart
                data={rndDatasets(1, { opacity: 0.2 }, true)}
                options={{
                  themedData: true,
                  legend: {
                    position: 'right',
                  },
                  scale: {
                    ticks: {
                      beginAtZero: true,
                    },
                    reverse: false,
                  },
                }}
              />
            </Item>
            <Item name='RadarChart' path='/add-ons/radarchart' center={true}>
              <RadarChart
                data={rndDatasets(2, { opacity: 0.2 }, true)}
                options={{
                  scale: {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </Item>
            <Item name='ScatterChart' path='/add-ons/scatterchart' center={true}>
              <ScatterChart
                data={rndDatasets2d()}
              />
            </Item>
          </Section>
        </Box>
      </Page>
    );
  }
}
