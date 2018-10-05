import { RadioButton } from 'grommet';
import { doc } from 'grommet/components/RadioButton/doc';

import Doc from '../components/Doc';

const desc = doc(RadioButton).toJSON();

export default () => (
  <Doc
    name='RadioButton'
    desc={desc}
  />
);
