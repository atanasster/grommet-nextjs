import { Keyboard } from 'grommet';
import doc from 'grommet/components/Keyboard/doc';

import Doc from '../components/Doc';

const desc = doc(Keyboard).toJSON();

export default () => (
  <Doc name='Keyboard' desc={desc} />
);
