import React from 'react';

import { Box, Heading } from 'grommet';
import doc from 'grommet/components/Heading/doc';
import Doc from '../components/Doc';

const desc = doc(Heading).toJSON();

export default () => (
  <Doc
    name='Heading'
    desc={desc}
    examples={{
      color: (
        <Heading margin='none' color='accent-2'>A</Heading>
      ),
      level: (
        <Box direction='row' justify='end' wrap={true}>
          {[1, 2, 3, 4].map(level => (
            <Box key={level} margin='xsmall'>
              <Heading level={level} margin='none'>A</Heading>
            </Box>
          ))}
        </Box>
      ),
      margin: (
        <Box direction='row' justify='end' wrap={true}>
          {['none', 'small', 'medium', 'large'].map(margin => (
            <Box key={margin} margin='xsmall'>
              <Heading level={2} margin={margin}>A</Heading>
            </Box>
          ))}
        </Box>
      ),
      size: (
        <Box direction='row' justify='end' wrap={true}>
          {[1, 2, 3, 4].map(level => (
            <Box key={level} direction='row' justify='end'>
              {['small', 'medium', 'large'].map(size => (
                <Box key={size} margin='xsmall'>
                  <Heading level={level} margin='none' size={size}>A</Heading>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      ),
    }}
  />
);
