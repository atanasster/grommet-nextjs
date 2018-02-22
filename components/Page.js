import { Head } from 'next/document';
import { Grommet, Box, Anchor, Heading, Select } from 'grommet';
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

  onThemeChange = ({ option: theme }) => {
    this.setState({ theme });
  };

  render() {
    const { theme } = this.state;
    const { children, title: pageTitle } = this.props;
    return (
      <div>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Grommet theme={theme ? THEMES[theme] : undefined}>
          <Box >
            <Box
              direction='row'
              justify='between'
              align='center'
              background='brand'
              pad={{ horizontal: 'medium', vertical: 'medium' }}
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
            <Box >
              {children}
            </Box>
          </Box>
        </Grommet>
      </div>
    );
  }
}
