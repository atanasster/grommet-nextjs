import React from 'react';
import { Value } from 'grommet-controls';
import doc from 'grommet-controls/components/Value/doc';
import Doc from '../../components/Doc';

const desc = doc(Value).toJSON();

export default () => (
  <Doc
    name='Value'
    desc={desc}
  />
);
