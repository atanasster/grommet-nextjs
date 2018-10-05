import { Markdown } from 'grommet';
import { doc } from 'grommet/components/Markdown/doc';

import Doc from '../components/Doc';

const desc = doc(Markdown).toJSON();

export default () => (
  <Doc
    name='Markdown'
    desc={desc}
  />
);
