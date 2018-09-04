import { Box } from 'grommet';
import { DoughnutChart } from 'grommet-controls';
import doc from 'grommet-controls/components/DoughnutChart/doc';
import { rndDatasets } from '../../utils/data';
import Doc from '../../components/Doc';

const desc = doc(DoughnutChart).toJSON();

export default () => (
  <Doc
    name='DoughnutChart'
    desc={desc}
    example={
      <Box direction='row'>
        <Box basis='medium'>
          <DoughnutChart
            data={rndDatasets(1)}
            options={{
              themedData: true,
              legend: {
                display: false,
              },
              animation: {
                animateScale: true,
                animateRotate: true,
              },
            }}
          />

        </Box>
      </Box>
    }
  />
);
