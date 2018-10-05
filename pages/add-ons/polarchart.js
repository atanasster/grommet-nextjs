import { PolarChart } from 'grommet-controls';
import doc from 'grommet-controls/components/PolarChart/doc';
import Doc from '../../components/Doc';

const desc = doc(PolarChart).toJSON();

export default () => (
  <Doc
    name='PolarChart'
    desc={desc}
  />
);
