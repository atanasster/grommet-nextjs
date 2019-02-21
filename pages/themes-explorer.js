import React from 'react';
import 'isomorphic-fetch';
import withArticle from '../components/app/withArticle';

export default withArticle(class ThemesExplorer extends React.Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const r = await fetch(`${baseUrl}/api/themes`);
    const themeDocs = await r.json();
    return { themeDocs };
  }
}, {
  title: 'theme explorer',
  location: 'file',
  path: 'themes-explorer.md',
});
