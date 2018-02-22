import { Box, Image } from 'grommet';
import doc from 'grommet/components/Image/doc';

import Doc from '../components/Doc';

const desc = doc(Image).toJSON();

const SRC = '/assets/Wilderpeople_Ricky.jpg';

export default () => (
  <Doc name='Image' desc={desc}>
    <Box pad='large'>
      <Box border='all' align='center'>
        <Image src={SRC} />
      </Box>
      <Box basis='small' border='all'>
        <Image fit='contain' src={SRC} />
      </Box>
      <Box basis='medium' border='all'>
        <Image fit='cover' src={SRC} />
      </Box>
    </Box>
  </Doc>
);

