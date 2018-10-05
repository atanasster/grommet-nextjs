import { LineChart } from 'grommet-controls';
import doc from 'grommet-controls/components/LineChart/doc';
import Doc from '../../components/Doc';

const desc = doc(LineChart).toJSON();

export default () => (
  <Doc
    name='LineChart'
    desc={desc}
  />
);
