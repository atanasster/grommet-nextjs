import { Responsive } from 'grommet';
import doc from 'grommet/components/Responsive/doc';

import Doc from '../components/Doc';

const desc = doc(Responsive).toJSON();

export default () => (
  <Doc name='Responsive' desc={desc} />
);
