import { Distribution } from 'grommet';
import { doc } from 'grommet/components/Distribution/doc';

import Doc from '../components/Doc';

const desc = doc(Distribution).toJSON();

export default () => (
  <Doc
    name='Distribution'
    desc={desc}
  />
);
