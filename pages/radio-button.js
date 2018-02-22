import { Box, RadioButton } from 'grommet';
import doc from 'grommet/components/RadioButton/doc';

import Doc from '../components/Doc';

const desc = doc(RadioButton).toJSON();

export default () => (
  <Doc name='RadioButton' desc={desc}>
    <Box pad='large' align='start'>
      <Box margin='small'>
        <RadioButton label='default' onChange={() => {}} />
      </Box>
      <Box margin='small'>
        <RadioButton label='disabled, checked' disabled={true} checked={true} onChange={() => {}} />
      </Box>

      <Box margin='small' background='dark-2'>
        <Box margin='medium'>
          <RadioButton label='dark' onChange={() => {}} />
        </Box>
      </Box>
    </Box>
  </Doc>
);
