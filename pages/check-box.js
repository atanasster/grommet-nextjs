import { Box, CheckBox } from 'grommet';
import doc from 'grommet/components/CheckBox/doc';

import Doc from '../components/Doc';

const desc = doc(CheckBox).toJSON();

export default () => (
  <Doc
    name='CheckBox'
    desc={desc}
    examples={{
      checked: <CheckBox label='A' checked={true} onChange={() => {}} />,
      disabled: <CheckBox label='A' disabled={true} />,
      reverse: <CheckBox label='A' reverse={true} onChange={() => {}} />,
      toggle: (
        <Box>
          <Box margin={{ bottom: 'xsmall' }}>
            <CheckBox label='A' toggle={true} onChange={() => {}} />
          </Box>
          <CheckBox label='B' toggle={true} checked={true} onChange={() => {}} />
        </Box>
      ),
    }}
  />
);
