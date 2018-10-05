import { Anchor } from 'grommet';
import { doc } from 'grommet/components/Anchor/doc';
import Doc from '../components/Doc';

const desc = doc(Anchor).toJSON();

export default () => (
  <Doc
    name='Anchor'
    desc={desc}
  />
);
