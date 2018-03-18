import {
  Box, Button, Calendar, Carousel, Chart, CheckBox, Clock,
  Diagram, Distribution, DropButton, Anchor, FormField,
  Heading, Image, RangeSelector,
  Menu, Meter, Paragraph, RadioButton, RangeInput,
  Select, Stack,
  Table, TableBody, TableCell, TableHeader, TableRow,
  Text, TextArea, TextInput, Video, WorldMap,
} from 'grommet';
import { Add, LinkNext, Grommet as GrommetIcon, TopCorner, BottomCorner } from 'grommet-icons';
import RoutedButton from '../components/RoutedButton';
import Page from '../components/Page';
import Section from '../components/Section';
import Item from '../components/Item';
import ColorRoll from '../components/ColorRoll';

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

export default class Home extends React.Component {
  state = { values: [3, 7] };
  render() {
    const { values } = this.state;
    return (
      <Page title='Explore'>
        <Box pad='large'>
          <Box direction='row' gap='xlarge' margin={{ bottom: 'large' }}>
            <Box basis='medium' overflow='hidden'>
              <Heading level={1}>
                <strong>Grommet 2.0 core</strong>
              </Heading>
              <Paragraph size='large' margin='none'>
This is an experimental site built with <strong>Grommet 2</strong> and <strong>Next.js</strong>.
Visit the official <Anchor href='https://v2.grommet.io/' target='_blank'>Grommet site</Anchor> for the latest updates.
              </Paragraph>
            </Box>
          </Box>
        </Box>
        <Box pad={{ horizontal: 'large' }}>
          <Section align='stretch' name='Layout' index={0}>
            <Item name='Box' path='/box'>
              <Box flex={true} border={{ color: 'brand', size: 'large' }} />
            </Item>

            <Item name='Grid' path='/grid'>
              <Box flex={true} direction='row'>
                <Box basis='1/4' background='brand' margin={{ right: 'xsmall' }} />
                <Box flex={true} background='brand' margin={{ right: 'xsmall' }} />
                <Box basis='1/4' background='brand' />
              </Box>
            </Item>

            <Item name='Layer' path='/layer'>
              <Box flex={true} direction='row'>
                <Box basis='1/3' background='light-5' />
                <Box flex={true} background='brand' />
              </Box>
            </Item>

            <Item name='Stack' path='/stack'>
              <Box flex={true} border={{ color: 'brand', size: 'large' }}>
                <Box flex={true} background='brand' margin='large' />
              </Box>
            </Item>
          </Section>

          <Section name='Type' index={1}>
            <Item name='Heading' path='/heading' center={true}>
              <Heading level={2} margin='none'>Player 1 has entered the game</Heading>
            </Item>
            <Item name='Markdown' path='/markdown' center={true}>
              <code>
  # Grommet **heart**s markdown.

  Favorite thing,
  [link](https://www.instagram.com/p/I6h5u/)
              </code>
            </Item>
            <Item name='Paragraph' path='/paragraph' center={true}>
              <Paragraph>
                OASIS was much more than a game or an entertainment
                platform. {"It's"} a new way of life. People stay connected to it
                for the majority of a day...
              </Paragraph>
            </Item>
            <Item name='Text' path='/text' center={true}>
              <Text>Hello there!</Text>
            </Item>
          </Section>

          <Section basis='full' align='stretch' name='Color' index={2}>
            <Box flex={true}>
              <RoutedButton path='/color'>
                <Box>
                  <ColorRoll basis='small' />
                </Box>
              </RoutedButton>
            </Box>
          </Section>

          <Section name='Controls' index={3}>
            <Item name='Anchor' path='/anchor' center={true}>
              <Box direction='row' align='center' gap='small'>
                <Text color='brand'>Don&quot;t press me</Text>
                <LinkNext />
              </Box>
            </Item>
            <Item name='Button' path='/button' center={true}>
              <Button label='Panic' primary={true} onClick={() => {}} />
            </Item>
            <Item name='Drop' path='/drop' center={true}>
              <Box pad='xsmall' border={true}>
                <Box
                  background='brand'
                  margin='xsmall'
                  pad={{ horizontal: 'medium', vertical: 'small' }}
                />
              </Box>
            </Item>
            <Item name='DropButton' path='/dropbutton' center={true}>
              <DropButton
                label='Add'
                icon={<Add />}
                reverse={true}
                open={true}
                dropAlign={{ top: 'bottom', left: 'left' }}
                dropContent={
                  <Box
                    background='brand'
                    margin='small'
                    pad={{ horizontal: 'medium', vertical: 'small' }}
                  />
                }
              />
            </Item>
            <Item name='Menu' path='/menu' center={true}>
              <Menu tabIndex='-1' label='Actions' items={[]} />
            </Item>
          </Section>

          <Section name='Input' index={4}>
            <Item name='CheckBox' path='/checkbox' center={true}>
              <CheckBox checked={true} label='Option one' disabled={true} />
            </Item>
            <Item name='RadioButton' path='/radiobutton' center={true}>
              <RadioButton checked={true} label='Option one' disabled={true} />
            </Item>
            <Item name='RangeInput' path='/rangeinput' center={true}>
              <RangeInput />
            </Item>
            <Item name='RangeSelector' path='/rangeselector' center={true}>
              <Stack>
                <Box direction='row' justify='between'>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
                    <Box key={value} pad='small' border={false}>
                      <Text style={{ fontFamily: 'monospace' }}>{value}</Text>
                    </Box>
                 ))}
                </Box>
                <RangeSelector
                  direction='horizontal'
                  invert={false}
                  min={0}
                  max={9}
                  size='full'
                  round='small'
                  values={values}
                  onChange={nextValues => this.setState({ values: nextValues })}
                />
              </Stack>
            </Item>

            <Item name='Select' path='/select' center={true}>
              <Select options={[]} placeholder='Choices' tabIndex='-1' />
            </Item>
            <Item name='TextArea' path='/textarea' center={true}>
              <TextArea placeholder='Placeholder' disabled={true} />
            </Item>
            <Item name='TextInput' path='/textinput' center={true}>
              <TextInput placeholder='Placeholder' disabled={true} />
            </Item>
            <Item name='FormField' path='/formfield' center={true}>
              <FormField label='Name'>
                <TextInput />
              </FormField>
            </Item>

          </Section>

          <Section name='Visualizations' index={3}>
            <Item name='Calendar' path='/calendar'>
              <Box align='center' margin={{ top: 'xsmall' }}>
                <Calendar size='small' />
              </Box>
            </Item>
            <Item name='Chart' path='/chart'>
              <Chart
                aria-label='Chart example'
                bounds={[[0, 7], [0, 100]]}
                size={{ width: 'medium', height: 'small' }}
                round={true}
                values={CHART_VALUES}
              />
            </Item>
            <Item name='Clock' path='/clock' center={true}>
              <Clock />
            </Item>
            <Item name='Meter' path='/meter' center={true}>
              <Meter
                aria-label='Meter example'
                type='circle'
                size='full'
                thickness='large'
                round={true}
                values={[{ value: 60, label: 'sixty' }]}
              />
            </Item>
            <Item name='Diagram' path='/diagram' center={true}>
              <Stack>
                <Box>
                  <Box direction='row'>
                    {[1, 2].map(id => (
                      <Box
                        key={id}
                        id={id}
                        basis='xxsmall'
                        margin='small'
                        pad='medium'
                        round='small'
                        background='light-2'
                      />
                    ))}
                  </Box>
                  <Box direction='row'>
                    {[3, 4].map(id => (
                      <Box
                        key={id}
                        id={id}
                        basis='xxsmall'
                        margin='small'
                        pad='medium'
                        round='small'
                        background='light-2'
                      />
                    ))}
                  </Box>
                </Box>
                <Diagram
                  connections={[
                    {
                      fromTarget: '1',
                      toTarget: '2',
                      color: 'accent-1',
                      thickness: 'xsmall',
                      round: true,
                    },
                    {
                      fromTarget: '1',
                      toTarget: '4',
                      color: 'accent-1',
                      thickness: 'xsmall',
                      round: true,
                    },
                  ]}
                />
              </Stack>
            </Item>
            <Item name='Distribution' path='/distribution'>
              <Distribution
                values={[
                  { value: 70, color: 'light-3' },
                  { value: 50, color: 'light-3' },
                  { value: 30, color: 'brand' },
                  { value: 10, color: 'light-3' },
                ]}
              >
                {value => (
                  <Box pad='xsmall' background={value.color} fill={true}>
                    <Text>{value.value}</Text>
                  </Box>
                )}
              </Distribution>
            </Item>
            <Item name='WorldMap' path='/worldmap' center={true}>
              <WorldMap color='brand' />
            </Item>
          </Section>

          <Section name='Media' index={4}>
            <Item name='Image' path='/image'>
              <Image
                fit='cover'
                src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
              />
            </Item>

            <Item name='Video' path='/video'>
              <Video fit='cover'>
                <source src='//v2.grommet.io/assets/small.mp4' type='video/mp4' />
              </Video>
            </Item>
          </Section>

          <Section name='Accessibility' index={5}>
            <Item name='SkipLinks' path='/skiplinks' center={true}>
              <Text color='brand'>SkipLinks</Text>
            </Item>
          </Section>

          <Section name='Utilities' index={4}>
            <Item name='Grommet' path='/grommet' center={true}>
              <GrommetIcon color='brand' />
            </Item>
            <Item name='Keyboard' path='/keyboard' center={true}>
              <Text>ESC</Text>
            </Item>
            <Item name='Responsive' path='/responsive' center={true}>
              <Box direction='row'>
                <TopCorner />
                <BottomCorner />
              </Box>
            </Item>
          </Section>

          <Section name='Old School' index={6}>
            <Item name='Carousel' path='/carousel'>
              <Carousel fill={true}>
                <Image fit='contain' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
                <Image fit='contain' src='//v2.grommet.io/assets/IMG_4245.jpg' />
                <Image fit='contain' src='//v2.grommet.io/assets/IMG_4210.jpg' />
              </Carousel>
            </Item>
            <Item name='Table' path='/table' center={true}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell scope='col' border='bottom'>Name</TableCell>
                    <TableCell scope='col' border='bottom'>Flavor</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell scope='row'><strong>Eric</strong></TableCell>
                    <TableCell>Coconut</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope='row'><strong>Chris</strong></TableCell>
                    <TableCell>Watermelon</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Item>

            <Item name='Tabs' path='/tabs'>
              <Box flex={true} direction='row'>
                <Box flex={true} background='brand' margin={{ top: 'large' }} />
                <Box flex={true} background='brand' margin={{ top: 'medium' }} />
                <Box flex={true} background='brand' margin={{ top: 'large' }} />
              </Box>
            </Item>
          </Section>

        </Box>
      </Page>
    );
  }
}
