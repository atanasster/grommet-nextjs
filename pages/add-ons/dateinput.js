import React from 'react';
import { DateInput } from 'grommet-controls';
import doc from 'grommet-controls/components/DateInput/doc';
import Doc from '../../components/Doc';


const desc = doc(DateInput).toJSON();

export default () => (
  <Doc
    name='DateInput'
    desc={desc}
  />
);
