import { PieChart } from 'grommet-controls';
import doc from 'grommet-controls/components/PieChart/doc';
import Doc from '../../components/Doc';

const desc = doc(PieChart).toJSON();

export default () => (
  <Doc
    name='PieChart'
    desc={desc}
  />
);
