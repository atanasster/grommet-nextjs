import { Box, Paragraph } from 'grommet';
import doc from 'grommet/components/Paragraph/doc';

import Doc from '../components/Doc';

const desc = doc(Paragraph).toJSON();

const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default () => (
  <Doc name='Paragraph' desc={desc}>
    <Box pad='large'>
      <Paragraph><strong>Default</strong> {LOREM_IPSUM}</Paragraph>
      <Paragraph size='large'><strong>Large</strong> {LOREM_IPSUM}</Paragraph>
      <Paragraph size='small'><strong>Small</strong> {LOREM_IPSUM}</Paragraph>
    </Box>
  </Doc>
);
