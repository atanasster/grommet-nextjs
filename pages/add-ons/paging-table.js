import React from 'react';
import { PagingTable } from 'grommet-controls';
import doc from 'grommet-controls/components/PagingTable/doc';
import Doc from '../../components/Doc';

const desc = doc(PagingTable).toJSON();

export default () => (
  <Doc
    name='PagingTable'
    desc={desc}
  />
);
