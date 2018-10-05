import { RadarChart } from 'grommet-controls';
import doc from 'grommet-controls/components/RadarChart/doc';
import Doc from '../../components/Doc';

const desc = doc(RadarChart).toJSON();

export default () => (
  <Doc
    name='RadarChart'
    desc={desc}
  />
);
