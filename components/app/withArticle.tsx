import { Component } from 'react';
import getDisplayName from 'recompose/getDisplayName';
import { Box, Anchor } from 'grommet';
import { Github } from 'grommet-icons';
import ExtMarkdown from '../markdown/ExtMarkdown';
import Page from './Page';

interface ArticleContent {
  htmlUrl: string;
}
interface WithArticleProps {
  markdown: string;
  content: ArticleContent;
}

interface ArticleProps {
  location?: string;
  owner?: string;
  repo?: string;
  path: string;
  title: string;
  url?: string;
}
export default (ComposedComponent, { location = 'github', owner = 'default', repo = 'default', path, title, url } : ArticleProps) => class withArticle extends Component<WithArticleProps, {}> {
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

    render(): JSX.Element {
      const { content, markdown, ...rest } = this.props;
      return (
        <Page title={title}>
          <Box pad='large' gap='medium'>
            <Box direction='row' justify='end' align='center'>
              <Anchor
                icon={<Github />}
                label='Edit this page'
                href={url || content.htmlUrl}
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
