import { Diagram } from 'grommet';
import { doc } from 'grommet/components/Diagram/doc';

import Doc from '../components/Doc';

const desc = doc(Diagram).toJSON();


export default () => (
  <Doc
    name='Diagram'
    desc={desc}
  />
);
