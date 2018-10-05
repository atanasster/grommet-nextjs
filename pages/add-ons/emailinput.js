import React from 'react';
import { EmailInput } from 'grommet-controls';
import doc from 'grommet-controls/components/EmailInput/doc';
import Doc from '../../components/Doc';

const desc = doc(EmailInput).toJSON();

export default () => (
  <Doc
    name='EmailInput'
    desc={desc}
  />
);
