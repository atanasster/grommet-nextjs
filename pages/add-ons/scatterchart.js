import { Box } from 'grommet';
import { ScatterChart } from 'grommet-controls';
import doc from 'grommet-controls/components/ScatterChart/doc';
import { rndDatasets2d } from '../../utils/data';
import Doc from '../../components/Doc';

const desc = doc(ScatterChart).toJSON();

export default () => (
  <Doc
    name='RadarChart'
    desc={desc}
    example={
      <Box direction='row' >
        <Box basis='large'>
          <ScatterChart
            data={rndDatasets2d()}
          />
        </Box>
      </Box>
    }
  />
);
