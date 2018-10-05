import React from 'react';
import { DropInput } from 'grommet-controls';
import doc from 'grommet-controls/components/DropInput/doc';
import Doc from '../../components/Doc';

const desc = doc(DropInput).toJSON();

export default () => (
  <Doc
    name='DropInput'
    desc={desc}
  />
);
