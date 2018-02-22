import { Box, Chart, Stack, Text } from 'grommet';
import doc from 'grommet/components/Chart/doc';

import Doc from '../components/Doc';

const desc = doc(Chart).toJSON();

const BOUNDS = [[0, 7], [0, 100]];

const VALUES = [
  { value: [7, 100], label: 'one hundred' },
  { value: [6, 70], label: 'seventy' },
  { value: [5, 60], label: 'sixty' },
  { value: [4, 80], label: 'eighty' },
  { value: [3, 40], label: 'forty' },
  { value: [2, 0], label: 'zero' },
  { value: [1, 30], label: 'thirty' },
  { value: [0, 60], label: 'sixty' },
];

const VALUES2 = [
  { value: [7, 0, 100], label: 'one hundred' },
  { value: [6, 10, 70], label: 'seventy' },
  { value: [5, 20, 60], label: 'sixty' },
  { value: [4, 60, 80], label: 'eighty' },
  { value: [3, 30, 40], label: 'forty' },
  { value: [2, 0], label: 'zero' },
  { value: [1, 10, 30], label: 'thirty' },
  { value: [0, 20, 60], label: 'sixty' },
];

const REVERSE_VALUES =
  VALUES.map((v, i) => ({ ...v, value: [i, v.value[1]] }));

export default () => (
  <Doc name='Chart' desc={desc}>
    <Box pad='large'>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'medium', height: 'xsmall' }}
          aria-label='Bar chart'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'medium', height: 'xsmall' }}
          type='line'
          aria-label='Line chart'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'medium', height: 'xsmall' }}
          type='area'
          aria-label='Area chart'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'medium', height: 'xsmall' }}
          round={true}
          aria-label='Rounded bar chart'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'medium', height: 'xsmall' }}
          type='line'
          round={true}
          aria-label='Rounded line chart'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'medium', height: 'xsmall' }}
          type='area'
          round={true}
          aria-label='Rounded area chart'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'xsmall', height: 'xxsmall' }}
          thickness='xsmall'
          aria-label='Extra small bar chart'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'small', height: 'xxsmall' }}
          thickness='small'
          aria-label='Small bar chart'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES}
          size={{ width: 'xlarge', height: 'medium' }}
          thickness='xlarge'
          aria-label='Extra large bar chart'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }} alignSelf='start'>
        <Stack>
          <Chart
            bounds={BOUNDS}
            values={VALUES}
            size={{ width: 'medium', height: 'xsmall' }}
            type='area'
            round={true}
            aria-label='Rounded area chart'
          />
          <Chart
            bounds={BOUNDS}
            values={REVERSE_VALUES}
            size={{ width: 'medium', height: 'xsmall' }}
            color='accent-2'
            type='line'
            round={true}
            thickness='small'
            aria-label='Small rounded line chart'
          />
        </Stack>
        <Box direction='row' responsive={false} justify='between'>
          <Text>then</Text>
          <Text>now</Text>
        </Box>
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES2}
          size={{ width: 'medium', height: 'xsmall' }}
          aria-label='Small rounded line chart'
        />
      </Box>
      <Box margin={{ vertical: 'medium' }}>
        <Chart
          bounds={BOUNDS}
          values={VALUES2}
          size={{ width: 'medium', height: 'xsmall' }}
          thickness='xsmall'
          type='area'
          aria-label='Extra small ranged area chart'
        />
      </Box>
    </Box>
  </Doc>
);
