import React from 'react';
import { Notification } from 'grommet-controls';
import doc from 'grommet-controls/components/Notification/doc';
import Doc from '../../components/Doc';

const desc = doc(Notification).toJSON();

export default () => (
  <Doc
    name='Grommet Notification'
    desc={desc}
  />
);
