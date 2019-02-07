import React from 'react';
import { Box } from 'grommet';
import Page from '../components/Page';
import ExtMarkdown from '../components/ExtMarkdown';
import ComponentsGroup from '../components/ComponentsGroup';

export default () => (
  <Page
    title='Get started'
  >
    <Box>
      <ExtMarkdown>
        {`
##get started

  1. With plain React
  2. New app with CRA
  3. Add to existing app
  4. With next.js
  5. With gatsby

`}

      </ExtMarkdown>
    </Box>
    <Box>
      <ComponentsGroup
        group='Pages'
        examples={[]}
      />
      <ComponentsGroup
        group='Cards'
        examples={[]}
      />
      <ComponentsGroup
        group='Forms'
        examples={[]}
      />
      <ComponentsGroup
        group='Charts'
        examples={[]}
      />
    </Box>
  </Page>
);
