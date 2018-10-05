import { Grid } from 'grommet';
import { doc } from 'grommet/components/Grid/doc';

import Doc from '../components/Doc';

const desc = doc(Grid).toJSON();

export default () => (
  <Doc
    name='Grid'
    desc={desc}
  />
);
