import { Image } from 'grommet';
import { doc } from 'grommet/components/Image/doc';
import Doc from '../components/Doc';

const desc = doc(Image).toJSON();

export default () => (
  <Doc
    name='Image'
    desc={desc}
  />
);
