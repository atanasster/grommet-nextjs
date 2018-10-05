import { BarChart } from 'grommet-controls';
import doc from 'grommet-controls/components/BarChart/doc';
import Doc from '../../components/Doc';

const desc = doc(BarChart).toJSON();

export default () => (
  <Doc
    name='BarChart'
    desc={desc}
  />
);
