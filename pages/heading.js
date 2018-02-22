import { Box, Heading } from 'grommet';
import doc from 'grommet/components/Heading/doc';

import Doc from '../components/Doc';

const desc = doc(Heading).toJSON();

export default () => (
  <Doc
    name='Heading'
    desc={desc}
    examples={{
      level: (
        <Box>
          <Heading level={1} margin='none'>A</Heading>
          <Heading level={2} margin='none'>B</Heading>
          <Heading level={3} margin='none'>C</Heading>
          <Heading level={4} margin='none'>D</Heading>
        </Box>
      ),
      margin: (
        <Box>
          <Box border='horizontal' pad={{ horizontal: 'small' }}>
            <Heading level={2} margin='none'>A</Heading>
          </Box>
          <Box border='horizontal' pad={{ horizontal: 'small' }}>
            <Heading level={2} margin='small'>B</Heading>
          </Box>
          <Box border='horizontal' pad={{ horizontal: 'small' }}>
            <Heading level={2} margin='medium'>C</Heading>
          </Box>
          <Box border='horizontal' pad={{ horizontal: 'small' }}>
            <Heading level={2} margin='large'>D</Heading>
          </Box>
        </Box>
      ),
      size: (
        <Box>
          <Box direction='row' responsive={false}>
            <Heading level={1} margin='none' size='small'>A</Heading>
            <Heading level={1} margin='none' size='medium'>B</Heading>
            <Heading level={1} margin='none' size='large'>C</Heading>
          </Box>
          <Box direction='row' responsive={false}>
            <Heading level={2} margin='none' size='small'>D</Heading>
            <Heading level={2} margin='none' size='medium'>E</Heading>
            <Heading level={2} margin='none' size='large'>F</Heading>
          </Box>
          <Box direction='row' responsive={false}>
            <Heading level={3} margin='none' size='small'>G</Heading>
            <Heading level={3} margin='none' size='medium'>H</Heading>
            <Heading level={3} margin='none' size='large'>I</Heading>
          </Box>
          <Box direction='row' responsive={false}>
            <Heading level={4} margin='none' size='small'>J</Heading>
            <Heading level={4} margin='none' size='medium'>K</Heading>
            <Heading level={4} margin='none' size='large'>L</Heading>
          </Box>
        </Box>
      ),
    }}
  />
);
