import { Box } from 'grommet';
import { RadarChart } from 'grommet-controls';
import doc from 'grommet-controls/components/RadarChart/doc';
import { rndDatasets } from '../../utils/data';
import Doc from '../../components/Doc';

const desc = doc(RadarChart).toJSON();

export default () => (
  <Doc
    name='RadarChart'
    desc={desc}
    example={
      <Box direction='row' >
        <Box basis='large'>
          <RadarChart
            data={rndDatasets(2, { opacity: 0.2 }, true)}
            options={{
              scale: {
                ticks: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </Box>
      </Box>
    }
  />
);
