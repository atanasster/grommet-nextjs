import { HorizontalBarChart } from 'grommet-controls';
import doc from 'grommet-controls/components/HorizontalBarChart/doc';
import Doc from '../../components/Doc';

const desc = doc(HorizontalBarChart).toJSON();

export default () => (
  <Doc
    name='HorizontalBarChart'
    desc={desc}
  />
);
