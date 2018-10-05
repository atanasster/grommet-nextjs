import { Paragraph } from 'grommet';
import { doc } from 'grommet/components/Paragraph/doc';

import Doc from '../components/Doc';

const desc = doc(Paragraph).toJSON();

export default () => (
  <Doc
    name='Paragraph'
    desc={desc}
  />
);
