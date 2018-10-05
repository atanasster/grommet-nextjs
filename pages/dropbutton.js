import { DropButton } from 'grommet';
import { doc } from 'grommet/components/DropButton/doc';

import Doc from '../components/Doc';

const desc = doc(DropButton).toJSON();

export default () => (
  <Doc
    name='DropButton'
    desc={desc}
  />
);
