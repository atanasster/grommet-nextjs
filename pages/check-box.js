import { Box, CheckBox } from 'grommet';
import doc from 'grommet/components/CheckBox/doc';

import Doc from '../components/Doc';

const desc = doc(CheckBox).toJSON();

export default () => (
  <Doc name='CheckBox' desc={desc}>
    <Box pad='large' align='start'>
      <Box margin='small'>
        <CheckBox label='default' onChange={() => {}} />
      </Box>
      <Box margin='small'>
        <CheckBox label='disabled, checked' disabled={true} checked={true} onChange={() => {}} />
      </Box>
      <Box margin='small'>
        <CheckBox label='reverse' reverse={true} onChange={() => {}} />
      </Box>
      <Box margin='small'>
        <CheckBox label='toggle' toggle={true} onChange={() => {}} />
      </Box>

      <Box margin='small' background='dark-2'>
        <Box margin='medium'>
          <CheckBox label='dark check' onChange={() => {}} />
        </Box>
        <Box margin='medium'>
          <CheckBox label='dark toggle' toggle={true} onChange={() => {}} />
        </Box>
      </Box>
    </Box>
  </Doc>
);
