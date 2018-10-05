import React from 'react';
import { Colors } from 'grommet-controls';
import doc from 'grommet-controls/components/Colors/doc';
import Doc from '../../components/Doc';


const desc = doc(Colors).toJSON();

export default () => (
  <Doc
    name='Colors'
    desc={desc}
  />
);
