import React from 'react';
import 'isomorphic-fetch';
import withArticle from '../components/app/withArticle';

export default withArticle(class Templates extends React.Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const r = await fetch(`${baseUrl}/api/templates/byCategory`);
    const templates = await r.json();
    return { templates };
  }
}, {
  title: 'page templates',
  location: 'file',
  path: 'page-templates.md',
});
