import Head from 'next/head';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Grommet, Box, Anchor, Heading, Select } from 'grommet';
import { hpe } from 'grommet/themes';
import RoutedButton from './RoutedButton';

const THEMES = {
  grommet: undefined,
  hpe,
};

const themeState = (theme = 'grommet') => ({ theme });

class Page extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = themeState(props.router.query.theme);
  }

  componentWillReceiveProps(props) {
    this.setState(themeState(props.router.query.theme));
  }
  onThemeChange = ({ option: theme }) => {
    const { router } = this.props;
    const path = { pathname: router.pathname, query: { ...router.query, theme } };
    router.replace(path, path, { shallow: true });
  };

  render() {
    const { theme } = this.state;
    const { children, title: pageTitle, nav } = this.props;
    return (
      <div>
        {pageTitle && (
          <Head>
            <title>{`Grommet - ${pageTitle}`}</title>
          </Head>
          )
        }
        <Grommet theme={theme ? THEMES[theme] : undefined}>
          <Box >
            {nav && (
            <Box
              direction='row'
              justify='between'
              align='center'
              background='brand'
              pad={{ horizontal: 'medium', vertical: 'medium' }}
              animation='fadeIn'
            >
              <Heading margin='none'>
                <RoutedButton path='/' preserveParams='theme'>
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
             ) }
            <Box >
              {children}
            </Box>
          </Box>
        </Grommet>
      </div>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  nav: PropTypes.bool,
};

Page.defaultProps = {
  nav: true,
};

export default withRouter(Page);
