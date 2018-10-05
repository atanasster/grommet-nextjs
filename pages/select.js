import { Select } from 'grommet';
import { doc } from 'grommet/components/Select/doc';
import Doc from '../components/Doc';

const desc = doc(Select).toJSON();

export default () => (
  <Doc
    name='Select'
    desc={desc}
  />
);
