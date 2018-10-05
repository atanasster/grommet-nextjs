import React from 'react';
import { Spinning } from 'grommet-controls';
import doc from 'grommet-controls/components/Spinning/doc';
import Doc from '../../components/Doc';

const desc = doc(Spinning).toJSON();

export default () => (
  <Doc
    name='Spinning'
    desc={desc}
  />
);
