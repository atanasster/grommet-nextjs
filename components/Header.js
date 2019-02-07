import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Box, Heading, Select } from 'grommet';
import { colorIsDark } from 'grommet/utils';
import { queryParams } from './nextjs/urlParams';
import connect from '../redux';
import RoutedButton from './RoutedButton';
import { selectTheme } from '../redux/themes/actions';

class Header extends React.Component {
  state = {
    activeMenu: false,
  };
  constructor(props, context) {
    super(props, context);
    this.changeTheme(props.router.query.theme);
  }

  changeTheme(themeName) {
    this.props.selectTheme(themeName);
    this.theme = themeName;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.router.query.theme !== this.theme) {
      this.changeTheme(nextProps.router.query.theme);
    }
  }
  onResponsiveMenu = () => {
    this.setState({ activeMenu: !this.state.activeMenu });
  };

  onCloseMenu = () => {
    this.setState({ activeMenu: false });
  };
  onThemeChange = ({ option: theme }) => {
    const { router } = this.props;
    const path = { pathname: queryParams(router), query: { theme } };
    this.changeTheme(theme);
    router.replace(path, path, { shallow: true });
  };

  render() {
    const {
      title: pageTitle, themes: { themes, selected: theme }, size,
    } = this.props;
    const keywords = ['grommet', 'grommet 2', 'react', 'next-js', 'next.js', 'ui library'];
    if (pageTitle) {
      keywords.push(pageTitle);
    }
    const themeSelector = (
      <Box basis='medium' >
        <Select
          a11yTitle='Change theme'
          value={theme}
          options={Object.keys(themes)}
          onChange={this.onThemeChange}
        />
      </Box>
    );
    return (
      <Box
        tag='header'
        direction='row-responsive'
        align='center'
        background='brand'
        pad='medium'
        animation='fadeIn'
        justify='between'
        border={themes[theme].global.colors.brand && !colorIsDark(themes[theme].global.colors.brand) ? { side: 'bottom', size: 'medium' } : undefined}
      >
        {size !== 'small' && (
          <Heading margin='none'>
            <RoutedButton path='/'>
                grommet-controls
            </RoutedButton>
          </Heading>
        )}
        <Box direction='row' align='center' gap='small' tag='nav'>
          {themeSelector}
        </Box>
      </Box>
    );
  }
}

Header.defaultProps = {
  size: undefined,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
};


const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTheme }, dispatch);

const mapStateToProps = state => ({
  themes: state.themes,
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

