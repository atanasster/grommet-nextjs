import React from 'react';
import { Box } from 'grommet';
import { doc } from 'grommet/components/Box/doc';
import Doc from '../components/Doc';

const desc = doc(Box).toJSON();

export default () => (
  <Doc
    name='Box'
    desc={desc}
  />
);
