import React from 'react';
import 'isomorphic-fetch';
import { Box } from 'grommet';
import Page from '../components/app/Page';
import ComponentsGroup from '../components/components/ComponentsGroup';
// eslint-disable-next-line no-unused-vars
import { ComponentInterface } from '../components/components/Component';


interface DXGridGrommetProps {
  examples: ComponentInterface[],
}
export default class DXGridGrommet extends React.Component<DXGridGrommetProps> {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(`${baseUrl}/api/examples/dx-grid`);
    const allExamples = await res.json();
    return {
      examples: allExamples,
    };
  }

  render() {
    const { examples } = this.props;
    return (
      <Page title='dx-react-grid-grommet'>
        <Box
          pad={{
            horizontal: 'large',
          }}
        >
          <ComponentsGroup examples={examples} group='dx-grid' />
        </Box>
      </Page>
    );
  }
}
