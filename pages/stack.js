import { Box, Stack, Heading } from 'grommet';
import doc from 'grommet/components/Stack/doc';

import Doc from '../components/Doc';

const desc = doc(Stack).toJSON();

export default () => (
  <Doc name='Stack' desc={desc}>
    <Box pad='large'>
      <Stack>
        <Box pad='large' background='light-2'>
          <Heading level={3}>BASE</Heading>
        </Box>
        <Box margin='medium' pad='small' justify='center' align='center'>
          <Heading level={1} margin='none'>Stack</Heading>
        </Box>
      </Stack>
    </Box>
  </Doc>
);
