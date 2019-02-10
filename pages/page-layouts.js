import React from 'react';
import { withRouter } from 'next/router';
import 'isomorphic-fetch';
import { Box } from 'grommet';
import Page from '../components/Page';

class Templates extends React.Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const r = await fetch(`${baseUrl}/api/templates`);
    const content = await r.json();
    return { content };
  }
  render() {
    // const { content } = this.props;
    return (
      <Page
        title='Template'
      >
        <Box fill={true}>
          *WIP*
        </Box>
      </Page>
    );
  }
}

export default withRouter(Templates);
