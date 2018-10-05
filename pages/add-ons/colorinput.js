import React from 'react';
import { ColorInput } from 'grommet-controls';
import doc from 'grommet-controls/components/ColorInput/doc';
import Doc from '../../components/Doc';

const desc = doc(ColorInput).toJSON();

export default () => (
  <Doc
    name='ColorInput'
    desc={desc}
  />
);
