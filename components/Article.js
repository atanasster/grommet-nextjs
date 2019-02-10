import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';
import { Box, Anchor } from 'grommet';
import { Github } from 'grommet-icons';
import ExtMarkdown from './ExtMarkdown';
import Page from './Page';

class Article extends React.Component {
  state = {
    markdown: '',
    content: {},
  };
  componentDidMount() {
    const {
      location, owner, repo, path,
    } = this.props;
    fetch(`/api/${location}/${owner}/${repo}/${encodeURIComponent(path)}`)
      .then(r => r.json())
      .then(res => this.setState(res));
  }

  render() {
    const { content, markdown } = this.state;
    const { title, url } = this.props;
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
          <ExtMarkdown>
            {markdown}
          </ExtMarkdown>
        </Box>
      </Page>
    );
  }
}

Article.defaultProps = {
  location: 'github',
  url: undefined,
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  location: PropTypes.string,
  url: PropTypes.oneOf(['github', 'wiki', 'file']),
};


export default Article;
