import React from 'react';
import { Form } from 'grommet-controls';
import doc from 'grommet-controls/components/Form/doc';
import Doc from '../../components/Doc';

const desc = doc(Form).toJSON();

export default () => (
  <Doc
    name='Form'
    desc={desc}
  />
);
