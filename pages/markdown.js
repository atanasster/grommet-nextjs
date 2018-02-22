import { Box, Markdown } from 'grommet';
import doc from 'grommet/components/Markdown/doc';

import Doc from '../components/Doc';

const desc = doc(Markdown).toJSON();

const CONTENT = `
# Heading 1
Paragraph
## Heading 2
### Heading 3
#### Heading 4
`;

export default () => (
  <Doc name='Markdown' desc={desc}>
    <Box pad={{ horizontal: 'large' }}>
      <Markdown>
        {CONTENT}
      </Markdown>
    </Box>
  </Doc>
);
