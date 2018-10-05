import React from 'react';
import { FormField } from 'grommet';
import { doc } from 'grommet/components/FormField/doc';

import Doc from '../components/Doc';

const desc = doc(FormField).toJSON();

export default () => (
  <Doc
    name='FormField'
    desc={desc}
  />
);
