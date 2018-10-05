import React from 'react';
import { Video } from 'grommet';
import { doc } from 'grommet/components/Video/doc';
import Doc from '../components/Doc';

const desc = doc(Video).toJSON();

export default () => (
  <Doc
    name='Video'
    desc={desc}
  />
);
