/* eslint-disable import/no-duplicates */
import React from 'react';
import { withRouter } from 'next/router';
import 'isomorphic-fetch';
import { Box } from 'grommet';
import Page from '../components/Page';
import Example from '../components/Example';

class Template extends React.Component {
  static async getInitialProps({ query, req }) {
    const { folder = 'card', file = 'vertical_blog_post' } = query;
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const filePath = encodeURIComponent(`templates/${folder}/${file}.js`);
    const r = await fetch(`${baseUrl}/api/file/${filePath}`);
    const content = await r.json();
    return { content };
  }
  render() {
    const { content } = this.props;
    return (
      <Page
        title='Template'
      >
        <Box fill={true}>
          <Example
            editorPosition='left'
          >
            {content.markdown}
          </Example>
        </Box>
      </Page>
    );
  }
}

export default withRouter(Template);
