import React from 'react';
import { Box } from 'grommet';
import Page from '../components/Page';
import ExtMarkdown from '../components/ExtMarkdown';


export default () => (
  <Page
    title='Installation'
  >
    <Box>
      <ExtMarkdown>
        {`
##grommmet-controls
a package of react components built on top of grommet, designed to fill some gaps for developing enterprise-type applications with grommet
`}
      </ExtMarkdown>
    </Box>
    <Box>
      <ExtMarkdown>
        {`
#installation
\`$ npm install grommet grommet-icons grommet-components\`
`}
      </ExtMarkdown>

    </Box>
  </Page>
);
