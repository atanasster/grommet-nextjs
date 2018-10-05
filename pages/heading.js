import React from 'react';
import { Heading } from 'grommet';
import { doc } from 'grommet/components/Heading/doc';
import Doc from '../components/Doc';

const desc = doc(Heading).toJSON();

export default () => (
  <Doc
    name='Heading'
    desc={desc}
  />
);
