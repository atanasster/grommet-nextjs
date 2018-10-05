import React from 'react';
import { NumberInput } from 'grommet-controls';
import doc from 'grommet-controls/components/NumberInput/doc';
import Doc from '../../components/Doc';

const desc = doc(NumberInput).toJSON();

export default () => (
  <Doc
    name='NumberInput'
    desc={desc}

  />
);
