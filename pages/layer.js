import { Layer } from 'grommet';
import { doc } from 'grommet/components/Layer/doc';

import Doc from '../components/Doc';

const desc = doc(Layer).toJSON();

export default () => (
  <Doc
    name='Layer'
    desc={desc}

  />
);
