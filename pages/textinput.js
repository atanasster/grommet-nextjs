import { TextInput } from 'grommet';
import { doc } from 'grommet/components/TextInput/doc';

import Doc from '../components/Doc';

const desc = doc(TextInput).toJSON();

export default () => (
  <Doc
    name='TextInput'
    desc={desc}
  />
);
