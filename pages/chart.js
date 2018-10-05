import React from 'react';
import { Chart } from 'grommet';
import { doc } from 'grommet/components/Chart/doc';

import Doc from '../components/Doc';

const desc = doc(Chart).toJSON();

export default () => (
  <Doc
    name='Chart'
    desc={desc}
  />
);
