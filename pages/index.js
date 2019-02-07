import React from 'react';
import { Box } from 'grommet';
import Page from '../components/Page';
import ExtMarkdown from '../components/ExtMarkdown';
import Example from '../components/Example';


export default () => (
  <Page
    title='Home'
  >
    <Box>
      <ExtMarkdown>
        {`
#about this site
This a an unofficial site dedicated to the grommet react library, as well as the home of the grommet-controls collection of components.
 The site is built with next.js and the full source code can be found here [github](https://github.com/atanasster/grommet-nextjs).
 Head on there as we would really appreciate to hear your feedback and get some github stars.
`}
      </ExtMarkdown>
    </Box>
    <Box>
      <ExtMarkdown>
        {`
#[installation](/installation)
\`$ npm install grommet grommet-icons grommet-components\`
`}
      </ExtMarkdown>

    </Box>
    <Box>
      <ExtMarkdown>
        {`
#[get started](/get-started)

###if you project is set up for [tree shaking](/tree-shaking):
\`\`\`
import { Grommet, Box } from 'grommet';
import { Card, Value } from 'grommet-controls';
\`\`\`

###if you project is NOT set up for [tree shaking](/tree-shaking):
\`\`\`
import { Grommet } from 'grommet/components/Grommet';
import { Box } from 'grommet/components/Box';
import { Card } from 'grommet-controls/components/Card';
import { Value } from 'grommet-controls/components/Value';
\`\`\`

`}
      </ExtMarkdown>
      <Example
        editorPosition='left'
      >
        {`
const Demo = () => (
  <Grommet fill>
    <Box full>
      <Card height='small'>
        <Card.CardTitle>
          hello from grommet-controls
        </Card.CardTitle>
        <Card.CardContent align='center'>
          <Value label='Almost there' value='65%' color='red'/>
        </Card.CardContent>
      </Card>
    </Box>
  </Grommet>
);

render(<Demo />);
`}
      </Example>
    </Box>
    <Box>
      <ExtMarkdown>
        {`
  #[page templates](/page-layouts)
  *WIP*
  `}
      </ExtMarkdown>
    </Box>
    <Box>
      <ExtMarkdown>
        {`
  #[example sites](/sites)
  *WIP*
  `}
      </ExtMarkdown>
    </Box>
  </Page>
);
