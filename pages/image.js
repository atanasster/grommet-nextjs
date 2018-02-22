import { Box, Image } from 'grommet';
import doc from 'grommet/components/Image/doc';

import Doc from '../components/Doc';

const desc = doc(Image).toJSON();

const SRC = '//v2.grommet.io/assets/Wilderpeople_Ricky.jpg';

export default () => (
  <Doc
    name='Image'
    desc={desc}
    examples={{
      fit: (
        <Box>
          <Box basis='small' border='all' margin={{ bottom: 'xsmall' }}>
            <Image fit='contain' src={SRC} />
          </Box>
          <Box basis='small' border='all' margin={{ bottom: 'xsmall' }}>
            <Image fit='cover' src={SRC} />
          </Box>
        </Box>
      ),
    }}
  />
);
