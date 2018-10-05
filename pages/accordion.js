import React from 'react';
import { Accordion } from 'grommet';
import { doc } from 'grommet/components/Accordion/doc';

import Doc from '../components/Doc';

const desc = doc(Accordion).toJSON();

export default () => (
  <Doc
    name='Accordion'
    desc={desc}
  />
);
