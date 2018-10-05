import { Clock } from 'grommet';
import { doc } from 'grommet/components/Clock/doc';

import Doc from '../components/Doc';

const desc = doc(Clock).toJSON();

export default () => (
  <Doc
    name='Clock'
    desc={desc}
  />
);
