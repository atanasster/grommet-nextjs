import React from 'react';
import styled from 'styled-components';
import { Box, Grid, Anchor, Paragraph } from 'grommet';
import { Github } from 'grommet-icons';
import { Card } from 'grommet-controls';
import Page from '../components/Page';

const StyledIFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;  
  transform: scale(0.25);
  transform-origin: 0 0;
`;
const sites = [
  {
    href: 'https://v2.grommet.io',
    title: 'grommet site',
    source: 'https://github.com/grommet/grommet-site',
    description: 'Site for Grommet v2',
    author: 'Grommet',
    authorLink: 'https://github.com/grommet',
  },
  {
    href: 'https://crypto-grommet.herokuapp.com',
    title: 'crypto-grommet',
    source: 'https://github.com/atanasster/crypto-grommet',
    description: 'Crypto and equities app built with react, redux, nodejs, express, passport, nextjs, graphql, apollo',
    author: 'Atanas Stoyanov',
    authorLink: 'https://github.com/atanasster',
  },
  {
    href: 'https://grommet-dashboard.herokuapp.com/?packages=material-ui%2Csemantic-ui-react%2Creact-bootstrap%2Cantd%2Coffice-ui-fabric-react%2Cgrommet',
    title: 'dashboard template',
    source: 'https://github.com/atanasster/grommet-dashboard',
    description: 'React nextjs grommet 2 dashboard template',
    author: 'Atanas Stoyanov',
    authorLink: 'https://github.com/atanasster',

  },
  {
    href: 'https://grommet-nextjs.herokuapp.com',
    title: 'nextjs grommet site',
    source: 'https://github.com/atanasster/grommet-nextjs',
    description: 'Site for grommet v2 and grommet-controls built with next.js',
    author: 'Atanas Stoyanov',
    authorLink: 'https://github.com/atanasster',

  },
  {
    href: 'https://hyperjs.herokuapp.com',
    title: 'hyperparameters tensorflow',
    source: 'https://github.com/martin-stoyanov/hyperparameters-site',
    description: 'Home of the hyperparameters.js library for tensorflow.js',
    author: 'Martin Stoyanov',
    authorLink: 'https://github.com/martin-stoyanov',

  },
  {
    href: 'https://horizontalworking.herokuapp.com',
    title: 'horizontal working',
    source: 'https://github.com/martin-stoyanov/horizontalworking',
    description: 'Horizontal working sample grommet v2 + next.js',
    author: 'Martin Stoyanov',
    authorLink: 'https://github.com/martin-stoyanov',
  },

];

export default () => (
  <Page title='Built with grommet v2'>
    <Box pad='large'>
      <Grid columns='large' rows='medium' gap='medium'>
        {sites.map(site => (
          <Card key={site.title} background='white' gap={null}>
            <Card.CardTitle>
              <Anchor href={site.href} target='_blank'>{site.title}</Anchor>
            </Card.CardTitle>
            <Card.CardContent pad={null}>
              <Box direction='row' fill={true}>
                <Box width='1/3' height='100%' pad='small' background='light-2'>
                  <div style={{ width: '400%', height: '400%' }}>
                    <StyledIFrame title={site.title} src={site.href} />
                  </div>
                </Box>
                <Box width='2/3' height='100%' pad='small' >
                  <Anchor href={site.authorLink} target='_blank' >by: {site.author}</Anchor>
                  <Paragraph>
                    {site.description}
                  </Paragraph>
                  {site.source && (
                    <Anchor primary={true} href={site.source} target='_blank' label='source' icon={<Github />} />
                  )}
                </Box>
              </Box>
            </Card.CardContent>
          </Card>
        ))
      }
      </Grid>
    </Box>
  </Page>
);
