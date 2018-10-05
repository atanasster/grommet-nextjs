import { Button } from 'grommet';
import { doc } from 'grommet/components/Button/doc';

import Doc from '../components/Doc';

const desc = doc(Button).toJSON();

export default () => (
  <Doc
    name='Button'
    desc={desc}
  />
);
