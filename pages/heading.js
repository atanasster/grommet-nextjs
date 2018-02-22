import { Box, Heading } from 'grommet';
import doc from 'grommet/components/Heading/doc';

import Doc from '../components/Doc';

const desc = doc(Heading).toJSON();

export default () => (
  <Doc name='Heading' desc={desc}>
    <Box pad={{ horizontal: 'large' }}>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={1} size='large'>Heading 1 Large</Heading>
      <Heading level={2} size='large'>Heading 2 Large</Heading>
      <Heading level={3} size='large'>Heading 3 Large</Heading>
      <Heading level={4} size='large'>Heading 4 Large</Heading>
      <Heading level={1} size='small'>Heading 1 Small</Heading>
      <Heading level={2} size='small'>Heading 2 Small</Heading>
      <Heading level={3} size='small'>Heading 3 Small</Heading>
      <Heading level={4} size='small'>Heading 4 Small</Heading>
    </Box>
  </Doc>
);
