import React from 'react';
import { PasswordInput } from 'grommet-controls';
import doc from 'grommet-controls/components/PasswordInput/doc';
import Doc from '../../components/Doc';

const desc = doc(PasswordInput).toJSON();

export default () => (
  <Doc
    name='PasswordInput'
    desc={desc}
  />
);
