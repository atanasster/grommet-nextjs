import React from 'react';
import { ImageStamp } from 'grommet-controls';
import doc from 'grommet-controls/components/ImageStamp/doc';
import Doc from '../../components/Doc';

const desc = doc(ImageStamp).toJSON();

export default () => (
  <Doc
    name='ImageStamp'
    desc={desc}
  />
);
