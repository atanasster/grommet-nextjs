import React from 'react';
import { Sidebar } from 'grommet-controls';
import doc from 'grommet-controls/components/Sidebar/doc';
import Doc from '../../components/Doc';

const desc = doc(Sidebar).toJSON();

export default () => (
  <Doc
    name='Sidebar'
    desc={desc}
  />
);
