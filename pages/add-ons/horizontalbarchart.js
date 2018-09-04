import { Box } from 'grommet';
import { HorizontalBarChart } from 'grommet-controls';
import doc from 'grommet-controls/components/HorizontalBarChart/doc';
import { rndDatasets } from '../../utils/data';
import Doc from '../../components/Doc';

const desc = doc(HorizontalBarChart).toJSON();

export default () => (
  <Doc
    name='HorizontalBarChart'
    desc={desc}
    example={
      <Box direction='row'>
        <Box basis='medium'>
          <HorizontalBarChart
            data={rndDatasets(1)}
            options={{
              themedData: true,
              legend: { position: 'right' },
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
