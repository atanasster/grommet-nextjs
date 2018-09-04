import { Box } from 'grommet';
import { LineChart } from 'grommet-controls';
import doc from 'grommet-controls/components/LineChart/doc';
import { rndDatasets } from '../../utils/data';
import Doc from '../../components/Doc';

const desc = doc(LineChart).toJSON();

export default () => (
  <Doc
    name='LineChart'
    desc={desc}
    example={
      <Box direction='row'>
        <Box basis='medium'>
          <LineChart
            data={rndDatasets(2, { fill: false })}
            options={{
              title: {
                display: true,
                text: 'Title of chart',
              },
            }}
          />
        </Box>
      </Box>
    }
  />
);
