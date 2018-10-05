import React from 'react';
import { DataTable } from 'grommet';
import { doc } from 'grommet/components/DataTable/doc';
import Doc from '../components/Doc';

const desc = doc(DataTable).toJSON();

export default () => (
  <Doc
    name='DataTable'
    desc={desc}
  />
);
