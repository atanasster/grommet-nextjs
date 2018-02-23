import { Box, Heading, Select, Text } from 'grommet';
import { Amex, Mastercard, Visa } from 'grommet-icons';
import doc from 'grommet/components/Select/doc';

import Doc from '../components/Doc';
import allAirlines from '../data/airlines';

const desc = doc(Select).toJSON();

const stringOptions = ['small', 'medium', 'large', 'xlarge', 'huge'];
const creditCardOptions = [
  {
    type: 'visa', number: '4455', expires: '10/19', name: 'Paul Spencer',
  },
  {
    type: 'mastercard', number: '0143', expires: '08/20', name: 'Paul T Spencer David Aguela',
  },
  {
    type: 'amex', number: '8563', expires: '01/17', name: 'Paul S',
  },
];

const overflowStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

function getCreditCardIcon(type) {
  let icon;
  if (type === 'amex') {
    icon = <Amex color='plain' />;
  } else if (type === 'mastercard') {
    icon = <Mastercard color='plain' />;
  } else if (type === 'visa') {
    icon = <Visa color='plain' />;
  }
  return icon;
}

function renderCreditCardValue(creditCard) {
  return (
    <Box align='center' direction='row' pad='small'>
      {getCreditCardIcon(creditCard.type)}
      <Text margin={{ left: 'xsmall' }}>
        &#9679;&#9679;&#9679;&#9679;
      </Text>
      <Text margin={{ horizontal: 'xsmall' }}>
        <strong>{creditCard.number}</strong>
      </Text>
      <Text margin='none' color='light-6'>({creditCard.expires})</Text>
      <Text margin={{ horizontal: 'xsmall' }} style={overflowStyle}>
        {creditCard.name}
      </Text>
    </Box>
  );
}

function renderCreditCardOption(creditCardOption) {
  if (!creditCardOption) {
    return <Box align='start' pad='small'>None</Box>;
  }
  return (
    <Box
      align='center'
      direction='row'
      pad='small'
    >
      <Box
        a11yTitle={`${creditCardOption.type}, number: ${creditCardOption.number}`}
        direction='row'
        style={{ minWidth: '180px' }}
      >
        {getCreditCardIcon(creditCardOption.type)}
        <Text margin={{ left: 'xsmall' }}>
          &#9679;&#9679;&#9679;&#9679;
        </Text>
        <Text margin={{ horizontal: 'xsmall' }}>
          <strong>{creditCardOption.number}</strong>
        </Text>
        <Text margin='none' color='light-6'>({creditCardOption.expires})</Text>
      </Box>
      <Text margin={{ horizontal: 'xsmall' }}>
        {creditCardOption.name}
      </Text>
    </Box>
  );
}

export default class SelectDoc extends React.Component {
  state = {
    airline: '',
    airlines: allAirlines,
    creditCard: undefined,
    openAirlineDrop: false,
    size: stringOptions[0],
  }

  filterAirlines = query => (
    this.setState({
      airlines: allAirlines.filter(airline =>
        airline.toLowerCase().match(query.toLowerCase())),
      openAirlineDrop: true,
    })
  )

  render() {
    const {
      airline, airlines, creditCard, openAirlineDrop, size,
    } = this.state;
    return (
      <Doc
        name='Select'
        desc={desc}
        examples={{
          placeholder: (
            <Select
              placeholder='Choose one'
              options={stringOptions}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
          plain: (
            <Select
              plain={true}
              options={stringOptions}
              value={size}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
          value: (
            <Select
              options={stringOptions}
              value={size}
              onChange={({ option }) => this.setState({ size: option })}
            />
          ),
        }}
      >
        <Box pad={{ horizontal: 'large', bottom: 'xlarge' }}>
          <Heading level={2} margin={{ top: 'none' }}><strong>Examples</strong></Heading>
          <Box direction='row'>
            <Box direction='row' basis='medium' margin={{ top: 'small' }}>
              <Select
                a11yTitle='Open Credit Card Select'
                activeOptionIndex={
                  creditCard ? creditCardOptions.indexOf(creditCard) + 1 : undefined
                }
                background='white'
                placeholder='Select Credit Card'
                options={[undefined].concat(creditCardOptions)}
                value={creditCard ? renderCreditCardValue(creditCard) : undefined}
                onChange={({ option }) => this.setState({ creditCard: option })}
              >
                {option => renderCreditCardOption(option)}
              </Select>
            </Box>
          </Box>
          <Box direction='row'>
            <Box direction='row' basis='medium' margin={{ top: 'small' }}>
              <Select
                a11yTitle='Open Airline Select'
                dropSize='medium'
                placeholder='Select Airline'
                searchPlaceholder='Filter Airline'
                options={airlines}
                value={airline}
                onChange={
                  ({ option }) => this.setState({
                    airlines: allAirlines, airline: option, openAirlineDrop: false,
                  })
                }
                onClose={
                  () => this.setState({
                    airlines: allAirlines, openAirlineDrop: false,
                  })
                }
                onSearch={this.filterAirlines}
                open={openAirlineDrop}
              />
            </Box>
          </Box>
        </Box>
      </Doc>
    );
  }
}
