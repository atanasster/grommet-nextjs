import React from 'react';
import { Carousel } from 'grommet';
import { doc } from 'grommet/components/Carousel/doc';

import Doc from '../components/Doc';

const desc = doc(Carousel).toJSON();

export default () => (
  <Doc
    name='Carousel'
    desc={desc}
  />
);
