import { DoughnutChart } from 'grommet-controls';
import doc from 'grommet-controls/components/DoughnutChart/doc';
import Doc from '../../components/Doc';

const desc = doc(DoughnutChart).toJSON();

export default () => (
  <Doc
    name='DoughnutChart'
    desc={desc}
  />
);
