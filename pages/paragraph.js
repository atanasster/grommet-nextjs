import { Box, Paragraph } from 'grommet';
import doc from 'grommet/components/Paragraph/doc';

import Doc from '../components/Doc';

const desc = doc(Paragraph).toJSON();

export default () => (
  <Doc
    name='Paragraph'
    desc={desc}
    examples={{
      size: (
        <Box>
          <Paragraph size='small' margin='none'>Aaaaa Bbbbb Ccccc</Paragraph>
          <Paragraph size='medium' margin='none'>Ddddd Eeeee Fffff</Paragraph>
          <Paragraph size='large' margin='none'>Ggggg Hhhhh Iiiii</Paragraph>
          <Paragraph size='xlarge' margin='none'>Jjjjj Kkkkk</Paragraph>
        </Box>
      ),
    }}
  />
);
