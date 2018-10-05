import { ScatterChart } from 'grommet-controls';
import doc from 'grommet-controls/components/ScatterChart/doc';
import Doc from '../../components/Doc';

const desc = doc(ScatterChart).toJSON();

export default () => (
  <Doc
    name='RadarChart'
    desc={desc}
  />
);
