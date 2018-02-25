import Head from 'next/head';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Grommet, Box, Heading, Select } from 'grommet';
import { System } from 'grommet-icons';
import black from '../themes/black';
import RoutedButton from './RoutedButton';

const THEMES = {
  grommet: undefined,
  black,
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
              <Box direction='row' align='center' gap='small' justify='end'>
                <Box basis='small' >
                  <Select
                    a11yTitle='Change theme'
                    value={theme}
                    options={Object.keys(THEMES)}
                    onChange={this.onThemeChange}
                  />
                </Box>
                <RoutedButton icon={<System />} path='/theme' preserveParams='theme' />
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
