import { Box } from 'grommet';
import Doc from '../components/Doc';
import ColorRoll from '../components/ColorRoll';

export default () => (
  <Doc name='Color'>
    <Box pad='large'>
      <Box flex={true} basis='medium' direction='row' wrap={true}>
        <ColorRoll basis='small' />
      </Box>
    </Box>
  </Doc>
);
