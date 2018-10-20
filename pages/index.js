import 'isomorphic-fetch';
import { Box, Anchor, Heading, Paragraph, Text } from 'grommet';
import { Grommet as GrommetIcon, Descend } from 'grommet-icons';
import Page from '../components/Page';
import Section from '../components/Section';
import Item from '../components/Item';
import ExamplesGroup from '../components/ExamplesGroup';


export default class Home extends React.Component {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(`${baseUrl}/api/examples/grommet`);
    const allExamples = await res.json();
    return { examples: allExamples };
  }

  render() {
    const { examples } = this.props;

    return (
      <Page title='Explore'>
        <Box pad='large'>
          <Box direction='row' gap='xlarge' margin={{ bottom: 'large' }}>
            <Box basis='medium' overflow='hidden'>
              <Heading level={1}>
                <strong>Grommet 2.0 core</strong>
              </Heading>
              <Paragraph size='large' margin='none'>
This is an experimental site built with <strong>Grommet 2</strong> and <strong>Next.js</strong>.
Visit the official <Anchor href='https://v2.grommet.io/' target='_blank'>Grommet site</Anchor> for the latest updates.
              </Paragraph>
            </Box>
          </Box>
        </Box>
        <Box pad={{ horizontal: 'large' }}>
          <ExamplesGroup examples={examples} group='Layout' />
          <ExamplesGroup examples={examples} group='Type' />
          <ExamplesGroup examples={examples} group='Navigation' />
          <ExamplesGroup examples={examples} group='Controls' />
          <ExamplesGroup examples={examples} group='Input' />
          <ExamplesGroup examples={examples} group='Visualizations' />
          <ExamplesGroup examples={examples} group='Media' />

          <Section name='Utilities' index={4}>
            <Item name='Grommet' path='/grommet' center={true}>
              <GrommetIcon />
            </Item>
            <Item name='InfiniteScroll' path='/infinitescroll' center={true}>
              <Descend size='xlarge' />
            </Item>
            <Item name='Keyboard' path='/keyboard' center={true}>
              <Text>ESC</Text>
            </Item>
            <Item name='SkipLinks' path='/skiplinks' center={true}>
              <Text >SkipLinks</Text>
            </Item>
          </Section>
        </Box>
      </Page>
    );
  }
}
