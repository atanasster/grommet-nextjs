import React from 'react';
import { MaskedInput } from 'grommet-controls';
import doc from 'grommet-controls/components/MaskedInput/doc';
import Doc from '../../components/Doc';


const desc = doc(MaskedInput).toJSON();

export default () => (
  <Doc
    name='MaskedInput'
    desc={desc}
  />
);
