import React from 'react';

import { Box, Carousel, Image } from 'grommet';
import { doc } from 'grommet/components/Carousel/doc';

import Doc from '../components/Doc';

const desc = doc(Carousel).toJSON();

export default () => (
  <Doc
    name='Carousel'
    desc={desc}
    example={
      <Box align='center'>
        <Carousel fill={true}>
          <Image fit='contain' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
          <Image fit='contain' src='//v2.grommet.io/assets/IMG_4245.jpg' />
          <Image fit='contain' src='//v2.grommet.io/assets/IMG_4210.jpg' />
        </Carousel>
      </Box>
    }
  />
);
