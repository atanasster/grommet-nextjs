import { TextArea } from 'grommet';
import { doc } from 'grommet/components/TextArea/doc';

import Doc from '../components/Doc';

const desc = doc(TextArea).toJSON();

export default () => (
  <Doc
    name='TextArea'
    desc={desc}
  />
);
