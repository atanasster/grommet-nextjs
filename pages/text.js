import { Box, Text } from 'grommet';
import doc from 'grommet/components/Text/doc';

import Doc from '../components/Doc';

const desc = doc(Text).toJSON();

export default () => (
  <Doc
    name='Text'
    desc={desc}
    examples={{
      color: <Text color='status-critical'>status-critical</Text>,
      size: (
        <Box>
          <Text size='xsmall' margin='none'>Aaaaa Bbbbb Ccccc</Text>
          <Text size='small' margin='none'>Ddddd Eeeee Fffff</Text>
          <Text size='medium' margin='none'>Ggggg Hhhhh Iiiii</Text>
          <Text size='large' margin='none'>Jjjjj Kkkkk</Text>
          <Text size='xlarge' margin='none'>Lllll</Text>
          <Text size='xxlarge' margin='none'>Mmmmm</Text>
        </Box>
      ),
    }}
  />
);
