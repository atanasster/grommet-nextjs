import { Box } from 'grommet';
import doc from 'grommet/components/Box/doc';
import Doc from '../components/Doc';

const desc = doc(Box).toJSON();
export default () => (
  <Doc name='Box' desc={desc}>
    <Box pad='large' background='neutral-1'>
      <Box pad='medium'>Plain sub-box</Box>
      <Box pad='medium' background='light-2'>Background color</Box>
      <Box
        pad='medium'
        background={{
          image: 'url(https://grommet.github.io/img/carousel-2.png)',
          dark: false,
        }}
      >
        Image background
      </Box>
      <Box pad='medium' border={{ color: 'accent-2', size: 'large' }}>
        Border
      </Box>
    </Box>
  </Doc>
);
