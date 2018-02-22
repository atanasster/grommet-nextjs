import Head from 'next/head';
import { Grommet, Box, Grid, Anchor, Heading } from 'grommet';
import { hpe } from 'grommet/themes';
import RoutedButton from './RoutedButton';

const THEMES = {
  grommet: undefined,
  hpe,
};

export default class Page extends React.Component {
  state = {
    theme: undefined,
  };

  render() {
    const { theme } = this.state;
    const { title: PageTitle, children } = this.props;
    return (
      <div>
        <Head>
          <title>{PageTitle}</title>
        </Head>
        <Grommet fill={true} theme={theme ? THEMES[theme] : undefined}>
          <Grid
            rows={['xsmall', 'flex']}
            columns={['full']}
            areas={[
              { name: 'header', start: [0, 0], end: [0, 0] },
              { name: 'main', start: [0, 1], end: [0, 1] },
            ]}
          >
            <Box
              gridArea='header'
              direction='row'
              justify='between'
              align='center'
              background='brand'
              pad={{ horizontal: 'medium' }}
              animation='fadeIn'
            >
              <Heading margin='none'>
                <RoutedButton path='/' >
                  Grommet 2.0 + Next.js
                </RoutedButton>
              </Heading>
              <Anchor
                href='https://github.com/grommet/grommet/wiki/Why-Grommet-2.0%3F'
                label='Why?'
              />
            </Box>
            <Box gridArea='main'>
              {children}
            </Box>
          </Grid>
        </Grommet>
      </div>
    );
  }
}
