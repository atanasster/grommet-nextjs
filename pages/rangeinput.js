import { RangeInput } from 'grommet';
import { doc } from 'grommet/components/RangeInput/doc';

import Doc from '../components/Doc';

const desc = doc(RangeInput).toJSON();

export default () => (
  <Doc
    name='RangeInput'
    desc={desc}
  />
);
