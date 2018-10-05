import { Menu } from 'grommet';
import { doc } from 'grommet/components/Menu/doc';
import Doc from '../components/Doc';

const desc = doc(Menu).toJSON();

export default () => (
  <Doc
    name='Menu'
    desc={desc}
  />
);
