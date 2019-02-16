import React from 'react';
import getDisplayName from 'recompose/getDisplayName';
import { Box, Anchor } from 'grommet';
import { Github } from 'grommet-icons';
import ExtMarkdown from './markdown/ExtMarkdown';
import Page from './Page';

export default (ComposedComponent, {
  location = 'github', owner = 'default', repo = 'default', path, title, url,
}) => class withArticle extends React.Component {
    static displayName = `withArticle(${getDisplayName(
      ComposedComponent
    )})`;

    static async getInitialProps(ctx) {
      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }
      const { req } = ctx;
      const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
      const data = await fetch(`${baseUrl}/api/${location}/${owner}/${repo}/${encodeURIComponent(path)}`);
      const result = await data.json();
      return {
        ...result,
        ...composedInitialProps,
      };
    }
    render() {
      const {
        content, markdown, ...rest
      } = this.props;
      return (
        <Page title={title}>
          <Box pad='large' gap='medium'>
            <Box direction='row' justify='end' align='center'>
              <Anchor
                icon={<Github />}
                label='Edit this page'
                primary={true}
                href={url || content.html_url}
                target='_blank'
              />
            </Box>
            <ExtMarkdown
              {...rest}
            >
              {markdown}
            </ExtMarkdown>
          </Box>
        </Page>
      );
    }
};
