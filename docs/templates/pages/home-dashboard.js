/*
import React from 'react';
import { Box, Grommet, Anchor, Grid, Text, Carousel, Image, Heading, ResponsiveContext, Paragraph, grommet } from 'grommet';
import { Favorite, Home, LineChart, BarChart, Reactjs, Dashboard, UserSettings, Inbox, Android, Apple, ClosedCaption } from 'grommet-icons';
import { Avatar, Header, Sidebar, Tag, VerticalMenu, Card, IconButton } from 'grommet-controls';
*/

const Section = ({ children, name }) => (
  <Box
    tag='section'
    pad={{ vertical: 'medium', horizontal: 'xlarge' }}
  >
    <Heading level={2} margin={{ top: 'none' }} alignSelf='center'>
      {name}
    </Heading>
    {children}
  </Box>
);

const Footer = ({ children, ...rest }) => (
  <Box
    tag='footer'
    direction='row'
    background='brand'
    fill='horizontal'
    justify='between'
    align='center'
    pad='small'
    {...rest}
  >
    {children}
  </Box>
);

const services = [
  { name: 'Reactjs', color: 'accent-1', icon: Icons.Reactjs },
  { name: 'Android', color: 'accent-2', icon: Icons.Android },
  { name: 'iOS', color: 'accent-3', icon: Icons.Apple },
  { name: 'Video', color: 'accent-4', icon: Icons.ClosedCaption },
];

const Demo = () => {
  return (
    <Grommet theme={grommet}>
      <ResponsiveContext.Consumer>
        {responsiveSize => (
          <Box>
            <Header
              position='sticky'
            >
              <Box direction='row' gap='small' align='center'>
                <Icons.Reactjs />
                {responsiveSize !== 'small' && (
                  <Heading level={3} margin='none'>
                    starter app
                  </Heading>
                )}
              </Box>
                <Anchor href='#' label='about' size='large'/>
            </Header>
            <Box>
              <Box direction='row'>
                <Sidebar
                  title='My app'
                  width='250px'
                >
                  <Box overflow='auto'>
                    <VerticalMenu
                      activeItem={{ id: 'home' }}
                      items={[
                        {
                         id: 'home',
                          href: '/',
                          label: 'Home',
                          icon: <Icons.Home />,
                        },
                        {
                          id: 'dashboards',
                          label: 'Dashboards',
                          icon: <Icons.Dashboard />,
                          items: [
                            {
                              id: 'budget',
                              href: '/budget',
                              label: 'Budget',
                              widget: <Icons.LineChart />,
                            },
                            {
                              id: 'expenses',
                              href: '/expenses',
                              label: 'Expenses',
                              widget: <Icons.BarChart  />,
                            },
                          ],
                        },
                        {
                          id: 'messages',
                          href: '/messages',
                          label: 'Messages',
                          icon: <Icons.Inbox />,
                          widget: <Tag round='small' border='all' pad={{ horizontal: 'small' }} label='4' />,
                        },
                        {
                          id: 'settings',
                          href: '/settings',
                          label: 'Settimgs',
                          icon: <Icons.UserSettings />,
                        },
                      ]}
                    />
                  </Box>
                </Sidebar>
                <Box flex gap='large' fill='horizontal'>
                  <Carousel>
                    <Image
                      fit='cover'
                      src='https://picsum.photos/900/500/?image=662'
                    />
                    <Image
                      fit='cover'
                      src='https://picsum.photos/900/500/?image=663'
                    />
                    <Image
                      fit='cover'
                      src='https://picsum.photos/900/500/?image=664'
                    />
                  </Carousel>
                  <Section name='Latest news'>
                    <Grid columns='medium' gap='medium'>
                      {[0,1].map((item,index) => (
                        <Card key={`blogs_${index}`}>
                          <Anchor href='https://www.imdb.com/title/tt2911666/' style={{ maxWidth: '100%' }}>
                            <Box>
                              <Box basis='small' flex={false}>
                                <Image
                                  fit='cover'
                                  src={`https://picsum.photos/g/600/200/?image=${200+index}`}
                                />
                              </Box>
                            </Box>
                          </Anchor>
                          <Card.CardContent align='center'>
                            <Anchor path='https://www.imdb.com/title/tt2911666/'>
                              <Heading level={3} margin='none'>
                                John Wick
                              </Heading>
                            </Anchor>
                            <Paragraph
                              size='small'
                              style={{
                               display: '-webkit-box',
                               WebkitLineClamp: '5',
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                             }}
                            >
                              Legendary assassin retired from his violent career after marrying the love of his life.
                              Her sudden death leaves John in deep mourning and when sadistic mobster Iosef Tarasov and his thugs
                              steal John's prized car and kill the puppy that was a last gift from his wife,
                              John unleashes the remorseless killing machine within and seeks vengeance.
                            </Paragraph>
                            <Box direction='row' justify='between' pad={{ vertical: 'small', horizontal: 'medium' }} fill='horizontal'>
                              <Avatar
                                image={`https://picsum.photos/g/200/200?image=${100+index}`}
                                title='John Doe'
                                subTitle='15 min. ago'
                              />
                              <IconButton icon={<Icons.Favorite  />} onClick={() => alert('Great post')}/>
                            </Box>
                          </Card.CardContent>
                        </Card>
                      )
                      )}
                    </Grid>
                  </Section>
                  <Section name='Our services'>
                    <Grid columns={{ "count": "fit", size: 'small' }} gap='large' alignContent='center'>
                      {services.map((item, index) => (
                        <Card key={`services_${index}`}>
                          <Box direction='row' fill align='center' pad='small' gap='small'>
                            <Box background={item.color} flex={false} pad='small'>
                              <item.icon size='xlarge' />
                            </Box>
                            <Box justify='between' gap='small'>
                              <Text size='large' weight='bold' >
                                {item.name}
                              </Text>
                              <Text size='small'>
                                check our {item.name} services
                              </Text>
                              <Anchor label='see more...' />
                            </Box>
                          </Box>
                        </Card>
                        )
                      )}
                    </Grid>
                  </Section>
                </Box>
              </Box>
            </Box>
            <Footer>
              footer
            </Footer>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

render(<Demo />);
