import React from 'react';
import { Grommet, Box, Heading, Clock } from 'grommet';


export default () => (
  <Grommet fill={true}>
    <Box fill={true} align='center'>
      <Heading level={1}>Countdown to Grommet 2</Heading>
      <Clock size='huge' />
    </Box>
  </Grommet>
);
