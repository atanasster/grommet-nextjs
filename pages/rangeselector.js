import React from 'react';
import { RangeSelector } from 'grommet';
import { doc } from 'grommet/components/RangeSelector/doc';

import Doc from '../components/Doc';

const desc = doc(RangeSelector).toJSON();

export default () => (
  <Doc
    name='RangeSelector'
    desc={desc}
  />
);
