import React from 'react';
import {
  Accordion,
  AccordionPanel,
  Box,
  Text,
} from 'grommet';
import { doc } from 'grommet/components/Accordion/doc';

import Doc from '../components/Doc';

const desc = doc(Accordion).toJSON();

export default () => (
  <Doc
    name='Accordion'
    desc={desc}
    example={(
      <Accordion>
        <AccordionPanel label='Panel 1'>
          <Box
            align='center'
            justify='center'
            background={{ color: 'brand', opacity: 'weak' }}
            height='small'
          >
            <Text color='text'>Panel 1 contents</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label='Panel 2'>
          <Box
            align='center'
            justify='center'
            background={{ color: 'brand', opacity: 'weak' }}
            height='small'
          >
            <Text color='text'>Panel 2 contents</Text>
          </Box>
        </AccordionPanel>
      </Accordion>
    )}
  />
);
