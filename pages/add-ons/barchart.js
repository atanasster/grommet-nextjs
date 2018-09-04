import { Box } from 'grommet';
import { BarChart } from 'grommet-controls';
import doc from 'grommet-controls/components/BarChart/doc';
import { rndDatasets } from '../../utils/data';
import Doc from '../../components/Doc';

const desc = doc(BarChart).toJSON();

export default () => (
  <Doc
    name='BarChart'
    desc={desc}
    example={
      <Box direction='row'>
        <Box basis='medium'>
          <BarChart
            data={rndDatasets(2, [{ color: 'brand' }, { color: 'red' }])}
          />
        </Box>
      </Box>
    }
  />
);
