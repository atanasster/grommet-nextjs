import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Box, Heading, Select, Layer, Button } from 'grommet';
import { colorIsDark } from 'grommet/utils';
import { System, Menu } from 'grommet-icons';
import { queryParams } from './nextjs/urlParams';
import connect from '../redux';
import RoutedButton from './RoutedButton';
import RoutedAnchor from './RoutedAnchor';
import NextJsAnchor from './Anchor';
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
    const isNarrow = size === 'small';
    const isWide = !isNarrow;
    const keywords = ['grommet', 'grommet 2', 'react', 'next-js', 'next.js', 'ui library'];
    if (pageTitle) {
      keywords.push(pageTitle);
    }
    const menuItems = [
      { path: '/sites', label: 'sites' },
      { path: '/examples', label: 'examples' },
      { path: '/add-ons', label: 'controls' },
      { path: '/colors', label: 'colors' },
    ];
    const items = menuItems.map(item => (
      item.external ? (
        <NextJsAnchor target='_blank' key={item.label} path={item.external} label={item.label} />
      ) : (
        <RoutedAnchor key={item.label} path={item.path} label={item.label} />
      )
    ));
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
    const themeDesigner = (
      <NextJsAnchor
        icon={isNarrow ? undefined : <System />}
        label={isNarrow ? 'theme designer' : undefined}
        path='/theme'
        a11yTitle='theme designer'
      />);
    let menu;
    if (isNarrow) {
      if (this.state.activeMenu) {
        menu = (
          <Layer plain={true} onEsc={this.onCloseMenu} position='left' onClickOutside={this.onCloseMenu}>
            <Box background='brand' gap='small' style={{ height: '100vh' }} pad='medium' align='start'>
              <Button icon={<Menu />} onClick={this.onResponsiveMenu} />
              <RoutedAnchor path='/' label='home' a11yTitle='go to home page' />
              {items}
              {themeDesigner}
              {themeSelector}
            </Box>
          </Layer>
        );
      }
    } else if (isWide) {
      menu = (
        <Box direction='row' align='center' justify='end' gap='small' tag='nav'>
          {items}
          {themeSelector}
          {themeDesigner}
        </Box>
      );
    }
    return (
      <Box
        tag='header'
        direction='row-responsive'
        justify='between'
        align='center'
        background='brand'
        pad='medium'
        animation='fadeIn'
        border={themes[theme].global.colors.brand && !colorIsDark(themes[theme].global.colors.brand) ? { side: 'bottom', size: 'medium' } : undefined}
      >
        <Box direction='row' align='center'gap='small' >
          {isNarrow && (
            <Button icon={<Menu />} onClick={this.onResponsiveMenu} />
          )}
          <Heading margin='none'>
            <RoutedButton path='/'>
                Grommet/Next.js
            </RoutedButton>
          </Heading>
        </Box>
        {menu}
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

