import React from 'react';
import { Box, Anchor } from 'grommet';

export default () => (
  <Box
    tag='footer'
    direction='row'
    justify='center'
    pad={{ top: 'large' }}
    justifySelf={true}
  >
    <Box
      basis='large'
      border='top'
      direction='row'
      justify='center'
      pad='medium'
      gap='medium'
    >
      <Anchor
        href='https://github.com/grommet/grommet/tree/NEXT'
        target='_blank'
        label='grommet'
        a11yTitle='Go to the github page for Grommet 2'
      />
      <Anchor
        href='https://github.com/atanasster/grommet-nextjs'
        target='_blank'
        label='git'
        a11yTitle='Go to the github page for this project'
      />
      <Anchor
        href='https://spectrum.chat/crypto-grommet'
        target='_blank'
        label='spectrum'
        a11yTitle='Go to the spectrum community for this project'
      />
    </Box>
  </Box>
);
