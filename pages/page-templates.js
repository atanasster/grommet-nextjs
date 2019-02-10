import React from 'react';
import { withRouter } from 'next/router';
import 'isomorphic-fetch';
import Article from '../components/Article';

class Templates extends React.Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const r = await fetch(`${baseUrl}/api/templates/byCategory`);
    const templates = await r.json();
    return { templates };
  }
  render() {
    const { templates } = this.props;
    return (
      <Article
        title='page templates'
        location='file'
        path='page-templates.md'
        templates={templates}
      />
    );
  }
}

export default withRouter(Templates);
