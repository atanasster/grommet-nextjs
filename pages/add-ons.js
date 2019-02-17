import 'isomorphic-fetch';
import { Box, Heading, Paragraph, Anchor } from 'grommet';
import Page from '../components/app/Page';
import ComponentsGroup from '../components/components/ComponentsGroup';


export default class AddOns extends React.Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(`${baseUrl}/api/examples/grommet-controls`);
    const allExamples = await res.json();
    return { examples: allExamples };
  }

  render() {
    const { examples } = this.props;
    return (
      <Page title='grommet-controls'>
        <Box pad='large'>
          <Box direction='row' gap='xlarge'>
            <Box margin={{ top: 'large' }} basis='large' overflow='hidden'>
              <Anchor
                href='https://github.com/atanasster/grommet-controls'
                target='_blank'
                label={(
                  <Heading level={1}>
                    <strong>grommet-controls</strong>
                  </Heading>
                )}
                a11yTitle='Go to the github page for this project'
              />
              <Paragraph size='large' margin='none'>
                Package of additional grommet components
              </Paragraph>
            </Box>
          </Box>
        </Box>
        <Box pad={{ horizontal: 'large' }}>
          <ComponentsGroup examples={examples} group='Layout' />
          <ComponentsGroup examples={examples} group='Navigation' />
          <ComponentsGroup examples={examples} group='Controls' />
          <ComponentsGroup examples={examples} group='Input' />
          <ComponentsGroup examples={examples} group='Validation' />
          <ComponentsGroup examples={examples} group='Visualizations' />
        </Box>
      </Page>
    );
  }
}
