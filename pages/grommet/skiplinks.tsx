import {
  Box, Button, SkipLinks, Heading, SkipLinkTarget, SkipLink,
} from 'grommet';
import { doc } from 'grommet/components/SkipLinks/doc';

import Doc from '../../components/documentation/Doc';

const desc = doc(SkipLinks).toJSON();

export default () => (
  <Doc name='SkipLinks' desc={desc}>
    <Box
      basis='large'
      pad={{
        horizontal: 'large', bottom: 'xlarge',
      }}
      align='start'
    >
      <Heading
        level={2}
        margin={{
          top: 'none',
        }}
      >
        <strong>Examples</strong>
      </Heading>
      <SkipLinks>
        <SkipLink id='main' label='Main Content' />
        <SkipLink id='footer' label='Footer' />
      </SkipLinks>
      <Button onClick={() => {}} label='Test1' />
      <Box>
        <SkipLinkTarget id='main' />
        <Heading level={3}>Main Content</Heading>
        <Button onClick={() => {}} label='Test2' />
      </Box>
      <Box tag='footer'>
        <SkipLinkTarget id='footer' />
        <Heading level={3}>Footer</Heading>
        <Button onClick={() => {}} label='Test3' />
      </Box>
    </Box>
  </Doc>
);
