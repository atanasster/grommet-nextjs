import React from 'react';
import 'isomorphic-fetch';
import { Box, Anchor, Heading, Paragraph, Text } from 'grommet';
import { Grommet as GrommetIcon, Descend } from 'grommet-icons';
import Page from '../../components/app/Page';
import Section from '../../components/app/Section';
import Item from '../../components/components/Item';
import ComponentsGroup from '../../components/components/ComponentsGroup';
// eslint-disable-next-line no-unused-vars
import { ComponentInterface } from '../../components/components/Component';

interface GrommetHomeProps {
  examples: ComponentInterface[],
}


export default class GrommetHome extends React.Component<GrommetHomeProps> {
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(`${baseUrl}/api/examples/grommet`);
    const allExamples = await res.json();
    return {
      examples: allExamples,
    };
  }

  render() {
    const { examples } = this.props;

    return (
      <Page title='Explore'>
        <Box pad='large'>
          <Box
            direction='row'
            gap='xlarge'
            margin={{
              bottom: 'large',
            }}
          >
            <Box basis='medium' overflow='hidden'>
              <Heading level={1}>
                <strong>Grommet 2.0 core</strong>
              </Heading>
              <Paragraph size='large' margin='none'>
                This is an experimental site built with
                {' '}
                <strong>Grommet 2</strong>
                {' '}
                and
                {' '}
                <strong>Next.js</strong>
                .
                Visit the official
                {' '}
                <Anchor href='https://v2.grommet.io/' target='_blank'>Grommet site</Anchor>
                {' '}
                for the latest updates.
              </Paragraph>
            </Box>
          </Box>
        </Box>
        <Box
          pad={{
            horizontal: 'large',
          }}
        >
          <ComponentsGroup examples={examples} group='Layout' />
          <ComponentsGroup examples={examples} group='Type' />
          <ComponentsGroup examples={examples} group='Navigation' />
          <ComponentsGroup examples={examples} group='Controls' />
          <ComponentsGroup examples={examples} group='Input' />
          <ComponentsGroup examples={examples} group='Visualizations' />
          <ComponentsGroup examples={examples} group='Media' />

          <Section name='Utilities'>
            <Item name='Grommet' path='/grommet/grommet'>
              <GrommetIcon />
            </Item>
            <Item name='InfiniteScroll' path='/grommet/infinitescroll'>
              <Descend size='xlarge' />
            </Item>
            <Item name='Keyboard' path='/grommet/keyboard'>
              <Text>ESC</Text>
            </Item>
            <Item name='SkipLinks' path='/grommet/skiplinks'>
              <Text>SkipLinks</Text>
            </Item>
          </Section>
        </Box>
      </Page>
    );
  }
}
