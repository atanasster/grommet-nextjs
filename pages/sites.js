import React from 'react';
import { Box, Grid, Anchor, Paragraph, Image } from 'grommet';
import { ResponsiveContext } from 'grommet/contexts';
import { Github } from 'grommet-icons';
import { Card } from 'grommet-controls';
import Page from '../components/Page';

const sites = [
  {
    href: 'https://v2.grommet.io',
    img: '/static/img/grommet-site.jpg',
    title: 'grommet site',
    source: 'https://github.com/grommet/grommet-site',
    description: 'Site for Grommet v2',
    author: 'Grommet',
    authorLink: 'https://github.com/grommet',
  },
  {
    href: 'https://crypto-grommet.herokuapp.com',
    img: '/static/img/crypto-grommet.jpg',
    title: 'crypto-grommet',
    source: 'https://github.com/atanasster/crypto-grommet',
    description: 'Crypto and equities app built with react, redux, nodejs, express, passport, nextjs, graphql, apollo',
    author: 'Atanas Stoyanov',
    authorLink: 'https://github.com/atanasster',
  },
  {
    href: 'https://grommet-dashboard.herokuapp.com/?packages=material-ui%2Csemantic-ui-react%2Creact-bootstrap%2Cantd%2Coffice-ui-fabric-react%2Cgrommet',
    img: '/static/img/grommet-dashboard.jpg',
    title: 'dashboard template',
    source: 'https://github.com/atanasster/grommet-dashboard',
    description: 'React nextjs grommet 2 dashboard template',
    author: 'Atanas Stoyanov',
    authorLink: 'https://github.com/atanasster',

  },
  {
    href: 'https://grommet-nextjs.herokuapp.com',
    img: '/static/img/grommet-nextjs.jpg',
    title: 'nextjs grommet site',
    source: 'https://github.com/atanasster/grommet-nextjs',
    description: 'Site for grommet v2 and grommet-controls built with next.js',
    author: 'Atanas Stoyanov',
    authorLink: 'https://github.com/atanasster',

  },
  {
    href: 'https://hyperjs.herokuapp.com',
    img: '/static/img/hyperparameters.jpg',
    title: 'hyperparameters tensorflow',
    source: 'https://github.com/martin-stoyanov/hyperparameters-site',
    description: 'Home of the hyperparameters.js library for tensorflow.js',
    author: 'Martin Stoyanov',
    authorLink: 'https://github.com/martin-stoyanov',

  },
  {
    href: 'https://ganevru.github.io/gatsby-starter-blog-grommet/',
    img: '/static/img/gatsby-blog.jpg',
    title: 'gatsby starter blog grommet',
    source: 'https://github.com/ganevru/gatsby-starter-blog-grommet',
    description: 'GatsbyJS v2 starter for creating a blog. Based on Grommet v2 UI.',
    author: 'Ivan Ganev',
    authorLink: 'https://github.com/Ganevru',

  },
  {
    href: 'https://horizontalworking.herokuapp.com',
    img: '/static/img/horizontal-working.jpg',
    title: 'horizontal working',
    source: 'https://github.com/martin-stoyanov/horizontalworking',
    description: 'Horizontal working sample grommet v2 + next.js',
    author: 'Martin Stoyanov',
    authorLink: 'https://github.com/martin-stoyanov',
  },
  {
    href: 'https://gatsby-source-marvel.netlify.com',
    img: '/static/img/gatsby-marvel.jpg',
    title: 'marvel API',
    source: 'https://github.com/oorestisime/gatsby-source-marvel/tree/master/example',
    description: 'Gatsby Marvel example site',
    author: 'Orestis Ioannou',
    authorLink: 'https://github.com/oorestisime',
  },
  {
    href: 'https://oioannou.com',
    img: '/static/img/orestis-blog.jpg',
    title: 'Personal blog',
    source: 'https://github.com/oorestisime/oioannou',
    description: 'Gatsby personal blog site',
    author: 'Orestis Ioannou',
    authorLink: 'https://github.com/oorestisime',
  },
  {
    href: 'https://mighty-castle-63479.herokuapp.com',
    img: '/static/img/grommet-layout.jpg',
    title: 'Grommet Layout Interactive Demo',
    source: 'https://github.com/Fatslug/grommet-layout-demo',
    description: 'Grommet Box layout demo',
    author: 'Sean Powell',
    authorLink: 'https://github.com/Fatslug',
  },
  {
    href: 'https://grommet-theme-builder.netlify.com',
    img: '/static/img/theme-builder.jpg',
    title: 'Grommet theme builder',
    source: 'https://github.com/oorestisime/grommet-theme-builder',
    description: 'Grommet theme builder sample',
    author: 'Orestis Ioannou',
    authorLink: 'https://github.com/oorestisime',
  },
  {
    href: 'https://likemeornot.io',
    img: '/static/img/like-me-or-not.jpg',
    title: 'Let\'s create the next big thing',
    source: undefined,
    description: 'Get exclusive deals by reviewing and promoting world changing startups',
    author: 'Nurlan Nurmanov',
    authorLink: undefined,
  },
  {
    href: 'https://hpe.design',
    img: '/static/img/hpe-design.jpg',
    title: 'hpe.design',
    source: undefined,
    description: 'You might be suprised to learn that hpe* makes apps, let alone has a bunch of folks that are trying to change how the enterprise is experienced.',
    author: 'HPE Design',
    authorLink: 'https://github.com/hpe-design',
  },
];

export default () => (
  <Page title='Built with grommet v2'>
    <Box pad='large'>
      <ResponsiveContext.Consumer>
        {size => (
          <Grid columns={size === 'small' ? 'full' : 'large'} rows='medium' gap='medium'>
            {sites.map(site => (
              <Card key={site.title} background='white' gap={null}>
                <Card.CardTitle>
                  <Anchor href={site.href} target='_blank'>{site.title}</Anchor>
                </Card.CardTitle>
                <Card.CardContent pad={null}>
                  <Box direction='row-responsive' fill={true} pad='small' gap='medium'>
                    <Box basis='1/3' align='center'>
                      <Anchor href={site.href} target='_blank'>
                        <Image width='100%' src={site.img} fit='contain' />
                      </Anchor>
                    </Box>
                    <Box basis='2/3' >
                      {site.authorLink ? (
                        <Anchor href={site.authorLink} target='_blank' >by: {site.author}</Anchor>
                        ) : `by: ${site.author}`}
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
        )}
      </ResponsiveContext.Consumer>
    </Box>
  </Page>
);
