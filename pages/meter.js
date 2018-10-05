import { Meter } from 'grommet';
import { doc } from 'grommet/components/Meter/doc';

import Doc from '../components/Doc';

const desc = doc(Meter).toJSON();

export default () => (
  <Doc
    name='Meter'
    desc={desc}
  />
);
