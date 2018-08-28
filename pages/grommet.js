import { Grommet } from 'grommet';
import { doc } from 'grommet/components/Grommet/doc';

import Doc from '../components/Doc';

const desc = doc(Grommet).toJSON();

export default () => (
  <Doc name='Grommet' desc={desc} />
);
