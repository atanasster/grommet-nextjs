import { Box, Clock, Text } from 'grommet';
import doc from 'grommet/components/Clock/doc';

import Doc from '../components/Doc';

const desc = doc(Clock).toJSON();

export default () => (
  <Doc
    name='Clock'
    desc={desc}
    examples={{
      night: (
        <Clock night={true} />
      ),
      seconds: (
        <Clock seconds={true} />
      ),
      size: (
        <Box>
          {['small', 'medium', 'large', 'xlarge'].map(size => (
            <Box key={size} margin={{ bottom: 'xsmall' }} align='end'>
              <Clock size={size} />
            </Box>
          ))}
        </Box>
      ),
      timezone: (
        <Box align='center'>
          <Clock timezone='Asia/Tokyo' />
          <Text>Tokyo</Text>
        </Box>
      ),
    }}
  />
);
