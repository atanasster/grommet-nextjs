import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Head from 'next/head';
import { Grommet, Box, Heading, Select, Anchor } from 'grommet';
import { System } from 'grommet-icons';
import connect from '../redux';
import RoutedButton from './RoutedButton';
import { selectTheme } from '../redux/themes/actions';

class Page extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { theme: props.router.query.theme };
  }

  changeTheme(themeName) {
    this.props.selectTheme(themeName);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.router.query.theme !== this.state.theme) {
      this.setState({ theme: nextProps.router.query.theme });
    }
  }


  onThemeChange = ({ option: theme }) => {
    const { router } = this.props;
    const path = { pathname: router.pathname, query: { ...router.query, theme } };
    this.changeTheme(theme);
    router.replace(path, path, { shallow: true });
  };

  render() {
    const {
      children, title: pageTitle, nav, themes: { themes },
    } = this.props;
    const { theme = 'grommet' } = this.state;
    return (
      <div>
        {pageTitle && (
          <Head>
            <title>{`Grommet - ${pageTitle}`}</title>
          </Head>
          )
        }
        <Grommet theme={themes[theme] || {}}>
          <Box >
            {nav && (
            <Box
              tag='header'
              direction='row'
              justify='between'
              align='center'
              background='brand'
              pad={{ horizontal: 'medium', vertical: 'medium' }}
              animation='fadeIn'
            >
              <Heading margin='none'>
                <RoutedButton path='/'>
                    Grommet 2.0 + Next.js
                </RoutedButton>
              </Heading>
              <Box direction='row' align='center' gap='small' justify='end'>
                <Box basis='small' >
                  <Select
                    a11yTitle='Change theme'
                    value={theme}
                    options={Object.keys(themes)}
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
            <Box
              tag='footer'
              direction='row'
              justify='center'
              pad={{ top: 'large' }}
            >
              <Box
                basis='large'
                border='top'
                direction='row'
                justify='center'
                pad='medium'
                gap='medium'
              >
                <Anchor
                  href='https://github.com/grommet/grommet/tree/NEXT'
                  target='_blank'
                  label='grommet'
                  a11yTitle='Go to the github page for Grommet 2'
                />
                <Anchor
                  href='https://github.com/atanasster/grommet-nextjs'
                  target='_blank'
                  label='git'
                  a11yTitle='Go to the github page for this project'
                />
              </Box>
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

const mapDispatchToProps = dispatch => bindActionCreators({ selectTheme }, dispatch);

const mapStateToProps = state => ({
  themes: state.themes,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));

