import { Box } from 'grommet';
import { PieChart } from 'grommet-controls';
import doc from 'grommet-controls/components/PieChart/doc';
import { rndDatasets } from '../../utils/data';
import Doc from '../../components/Doc';

const desc = doc(PieChart).toJSON();

export default () => (
  <Doc
    name='PieChart'
    desc={desc}
    example={
      <Box direction='row'>
        <Box basis='medium'>
          <PieChart
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
