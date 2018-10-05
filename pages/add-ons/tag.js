import React from 'react';
import { Tag } from 'grommet-controls';
import doc from 'grommet-controls/components/Tag/doc';
import Doc from '../../components/Doc';

const desc = doc(Tag).toJSON();

export default () => (
  <Doc
    name='Tag'
    desc={desc}
  />
);
