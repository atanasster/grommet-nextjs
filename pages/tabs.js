import { Tabs } from 'grommet';
import doc from 'grommet/components/Tabs/doc';

import Doc from '../components/Doc';

const desc = doc(Tabs).toJSON();

export default () => (
  <Doc name='Tabs' desc={desc} />
);
