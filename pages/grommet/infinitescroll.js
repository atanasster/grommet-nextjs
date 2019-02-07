import React from 'react';
import { InfiniteScroll } from 'grommet';
import { doc } from 'grommet/components/InfiniteScroll/doc';
import Doc from '../../components/Doc';

const desc = doc(InfiniteScroll).toJSON();

export default () => (
  <Doc name='InfiniteScroll' desc={desc} />
);
