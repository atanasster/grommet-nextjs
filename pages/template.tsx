import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withRouter, Router } from 'next/router';
import 'isomorphic-fetch';
import { Box, Button, Anchor } from 'grommet';
import { Code, Github } from 'grommet-icons';
import Page from '../components/app/Page';
import Example from '../components/documentation/Example';

interface TemplateProps {
  content: {
    markdown: string
  },
  router: Router,
}
class Template extends React.Component<TemplateProps> {
  state = {
    editor: undefined,
  }

  static async getInitialProps({ query, req }) {
    const { folder = 'card', file = 'vertical_blog_post' } = query;
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const filePath = encodeURIComponent(`templates/${folder}/${file}.js`);
    const r = await fetch(`${baseUrl}/api/file/${filePath}`);
    const content = await r.json();
    return {
      content,
    };
  }

  render() {
    const { content, router } = this.props;
    const { folder, file } = router.query;
    const { editor } = this.state;
    return (
      <Page
        title='Template'
      >
        <Box fill={true} gap='small'>
          <Box
            direction='row'
            background='light-3'
            pad={{
              horizontal: 'small',
            }}
            justify='end'
            gap='small'
          >
            <Button
              icon={<Code />}
              primary={editor === 'top'}
              onClick={() => this.setState({
                editor: (editor === 'top') ? undefined : 'top',
              })}
            />
            <Anchor
              target='_blank'
              href={`https://github.com/atanasster/grommet-nextjs/blob/master/docs/templates/${folder}/${file}.js`}
              icon={<Github />}
            />
          </Box>
          <Example
            library={folder as string}
            editorPosition={editor}
          >
            {content.markdown}
          </Example>
        </Box>
      </Page>
    );
  }
}

export default withRouter(Template);
