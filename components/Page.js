import Head from 'next/head';
import Router from 'next/router'
import { Grommet, Box, Grid, Anchor, Heading, Select } from 'grommet';
import { hpe } from 'grommet/themes';
import RoutedButton from './RoutedButton';

const THEMES = {
  grommet: undefined,
  hpe,
};


export default class Page extends React.Component {
  state = {
    theme: 'grommet',
  };

  constructor(props, context) {
    super(props, context);
    Router.onRouteChangeStart = this.onRouteChange;
  }
  onRouteChange = (url) => {
    console.log(url);
  };

  onThemeChange = ({ option: theme }) => {
    this.setState({ theme });
  };

  render() {
    const { theme } = this.state;
    console.log(this.props);
    const { title: PageTitle, children } = this.props;
    return (
      <div>
        <Head>
          <title>{PageTitle}</title>
        </Head>
        <Grommet theme={theme ? THEMES[theme] : undefined}>
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
              <Box direction='row' align='center' gap='small'>
                <Box basis='small' >
                  <Select
                    a11yTitle='Change theme'
                    value={theme}
                    options={['grommet', 'hpe']}
                    onChange={this.onThemeChange}
                  />
                </Box>
                <Anchor
                  href='https://github.com/grommet/grommet/wiki/Why-Grommet-2.0%3F'
                  label='Why?'
                />
              </Box>
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
