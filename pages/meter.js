import { Box, Meter, Stack, Text } from 'grommet';
import doc from 'grommet/components/Meter/doc';

import Doc from '../components/Doc';

const desc = doc(Meter).toJSON();

const SINGLE_VALUE = [
  { value: 60, label: 'sixty', onClick: () => alert('60') },
];
const MULTIPLE_VALUES = [
  {
    value: 60, label: 'sixty', color: 'neutral-1', onClick: () => alert('60'),
  },
  {
    value: 10, label: 'ten', color: 'accent-1', onClick: () => alert('10'),
  },
];

export default class MeterDoc extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  onHover(index) {
    return b => this.setState({ highlight: (b ? index : undefined) });
  }

  render() {
    const { highlight } = this.state;
    const multipleValues = MULTIPLE_VALUES.map((value, index) => ({
      ...value,
      highlight: (index === highlight),
      onHover: this.onHover(index),
    }));
    const highlightValue =
      (multipleValues.filter(v => v.highlight)[0] || { value: 100 });
    return (
      <Doc name='Meter' desc={desc}>
        <Box pad='large'>
          <Box margin={{ vertical: 'medium' }}>
            <Meter values={SINGLE_VALUE} aria-label='Single value meter' />
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <Meter values={multipleValues} aria-label='Multiple value meter' />
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <Meter
              round={true}
              size='xsmall'
              thickness='xsmall'
              values={multipleValues}
              aria-label='Extra small multiple value meter'
            />
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <Meter
              round={true}
              size='small'
              thickness='small'
              values={multipleValues}
              aria-label='Small multiple value meter'
            />
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <Meter
              round={true}
              size='large'
              thickness='large'
              values={multipleValues}
              aria-label='Large multiple value meter'
            />
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <Meter
              round={true}
              size='xlarge'
              thickness='xlarge'
              values={multipleValues}
              aria-label='Extra large multiple value meter'
            />
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <Meter
              size='full'
              values={multipleValues}
              aria-label='Full width value meter'
            />
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <Meter type='circle' values={SINGLE_VALUE} aria-label='Circle meter' />
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <Meter
              type='circle'
              values={multipleValues}
              aria-label='Multiple value circle meter'
            />
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <Meter
              type='circle'
              round={true}
              values={multipleValues}
              aria-label='Rounded multiple value circle meter'
            />
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <Meter
              type='circle'
              round={true}
              size='xsmall'
              thickness='xsmall'
              values={multipleValues}
              aria-label='Extra small rounded multiple value circle meter'
            />
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <Meter
              type='circle'
              round={true}
              size='small'
              thickness='small'
              values={multipleValues}
              aria-label='Small rounded multiple value circle meter'
            />
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <Meter
              type='circle'
              round={true}
              size='large'
              thickness='large'
              values={multipleValues}
              aria-label='Large rounded multiple value circle meter'
            />
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <Meter
              type='circle'
              round={true}
              size='xlarge'
              thickness='xlarge'
              values={multipleValues}
              aria-label='Extra large rounded multiple value circle meter'
            />
          </Box>
          <Box margin={{ vertical: 'medium' }}>
            <Meter
              type='circle'
              round={true}
              size='full'
              values={multipleValues}
              aria-label='Full width multiple value circle meter'
            />
          </Box>
          <Box margin={{ vertical: 'medium' }} alignSelf='start'>
            <Stack>
              <Meter
                type='circle'
                round={true}
                size='medium'
                values={multipleValues}
                aria-label='Multipel value circle meter'
              />
              <Box
                justify='center'
                align='center'
                pad='small'
                round='small'
                background={highlightValue.color}
              >
                <Text size='xxlarge'>{highlightValue.value}</Text>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Doc>
    );
  }
}
