import { Box } from 'grommet';
import { PolarChart } from 'grommet-controls';
import doc from 'grommet-controls/components/PolarChart/doc';
import { rndDatasets } from '../../utils/data';
import Doc from '../../components/Doc';

const desc = doc(PolarChart).toJSON();

export default () => (
  <Doc
    name='PolarChart'
    desc={desc}
    example={
      <Box direction='row'>
        <Box basis='medium'>
          <PolarChart
            data={rndDatasets(1, { opacity: 0.2 }, true)}
            options={{
              themedData: true,
              legend: {
                position: 'right',
              },
              scale: {
                ticks: {
                  beginAtZero: true,
                },
                reverse: false,
              },
            }}
          />
        </Box>
      </Box>
    }
  />
);
