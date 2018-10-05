import React from 'react';
import { Tags } from 'grommet-controls';
import doc from 'grommet-controls/components/Tags/doc';
import Doc from '../../components/Doc';

const desc = doc(Tags).toJSON();

export default () => (
  <Doc
    name='Tags'
    desc={desc}
  />
);
