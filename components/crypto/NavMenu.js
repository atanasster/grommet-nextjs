import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Anchor, Menu } from 'grommet';
import { Bitcoin as AppIcon, Menu as MenuIcon, User } from 'grommet-icons';
import { bindActionCreators } from 'redux';
import connect from '../../redux/index';
import Login from './auth/AuthSideBar';

import RoutedAnchor from './RoutedAnchor';
import routerPush from '../Router';
import { navActivate } from '../../redux/nav/actions';
import { signOut } from '../../redux/auth/actions';

class NavMenu extends Component {
  state = { loginForm: false };
  onResponsiveMenu = () => {
    const { nav: { active } } = this.props;
    this.props.navActivate(!active);
  };
  componentDidMount() {
    if (this.props.showLogin && !this.props.user) {
      // Layer can not render in SSR
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ loginForm: true });
    }
  }
  onCloseMenu = () => {
    this.props.navActivate(false);
  };

  onLogOut = () => {
    this.props.signOut();
    // routerPush({ route: 'home' });
  };

  renderMenu() {
    const { nav, user } = this.props;

    let menu;
    if (nav.responsive) {
      menu = (
        <Menu
          dropAlign={{ top: 'bottom', right: 'right' }}
          icon={<MenuIcon />}
          items={nav.items.map(item => ({ ...item, onClick: () => { routerPush(item.path); } }))}
        />
      );
    } else {
      menu = (
        <Box direction='row' align='center' justify='end' gap='small' tag='nav'>
          {nav.items.map((item, index) => (
            <RoutedAnchor key={`nav_item_${index}`} {...item} />
          ))}
          {user ? (
            <Menu
              dropAlign={{ top: 'bottom', right: 'right' }}
              label={user.username}
              items={[{ label: 'log out', a11yTitle: 'Log out of the site', onClick: this.onLogOut }]
                .concat(nav.user_items.map(item =>
                ({ ...item, onClick: () => { routerPush(item.path); } })))
              }
            />
          ) : (
            <Anchor icon={<User />} a11yTitle='Open login form' onClick={() => this.setState({ loginForm: true })} />
          )
          }
        </Box>
      );
    }
    return menu;
  }
  render() {
    const { loginForm } = this.state;
    let layer;
    if (loginForm) {
      layer = <Login onClose={() => this.setState({ loginForm: false })} />;
    }
    return (
      <Box
        tag='header'
        direction='row'
        justify='between'
        align='center'
        pad={{ bottom: 'medium' }}
        border='bottom'
      >
        <Box direction='row' align='center' gap='small'>
          <AppIcon color='plain' />
          <RoutedAnchor route='home' label='crypto-grommet' a11yTitle='Go to home page' />
        </Box>
        {this.renderMenu()}
        {layer}
      </Box>
    );
  }
}

NavMenu.defaultProps = {
  showLogin: false,
};

NavMenu.propTypes = {
  showLogin: PropTypes.bool,
};

const mapDispatchToProps = dispatch => bindActionCreators({ navActivate, signOut }, dispatch);


const mapStateToProps = state => ({
  nav: state.nav,
  user: state.auth.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
