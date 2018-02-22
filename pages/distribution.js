import { Box, Distribution, Text } from 'grommet';
import doc from 'grommet/components/Distribution/doc';

import Doc from '../components/Doc';

const desc = doc(Distribution).toJSON();

export default () => (
  <Doc
    name='Distribution'
    desc={desc}
    example={(
      <Distribution
        values={[
          { value: 50, color: 'light-3' },
          { value: 30, color: 'neutral-1' },
          { value: 20, color: 'brand' },
          { value: 10, color: 'light-3' },
          { value: 5, color: 'neutral-1' },
        ]}
      >
        {value => (
          <Box pad='xsmall' background={value.color} fill={true}>
            <Text size='large'>{value.value}</Text>
          </Box>
        )}
      </Distribution>
    )}
  />
);
