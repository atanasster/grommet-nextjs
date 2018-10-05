import { CheckBox } from 'grommet';
import { doc } from 'grommet/components/CheckBox/doc';

import Doc from '../components/Doc';

const desc = doc(CheckBox).toJSON();

export default () => (
  <Doc
    name='CheckBox'
    desc={desc}
  />
);
