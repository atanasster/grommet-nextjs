import { Calendar } from 'grommet';
import { doc } from 'grommet/components/Calendar/doc';

import Doc from '../components/Doc';

const desc = doc(Calendar).toJSON();

export default () => (
  <Doc
    name='Calendar'
    desc={desc}
  />
);
