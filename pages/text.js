import { Text } from 'grommet';
import { doc } from 'grommet/components/Text/doc';

import Doc from '../components/Doc';

const desc = doc(Text).toJSON();

export default () => (
  <Doc
    name='Text'
    desc={desc}
  />
);
