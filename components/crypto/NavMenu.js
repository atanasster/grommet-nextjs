import React, { Component } from 'react';
import { Box, Anchor, Menu } from 'grommet';
import { Bitcoin as AppIcon, Menu as MenuIcon, User } from 'grommet-icons';
import { bindActionCreators } from 'redux';
import connect from '../../redux/index';
// import Login from '../screens/auth/Login';
// import CurrencySelect from './currencies/CurrencySelect';
import RoutedAnchor from './RoutedAnchor';
import routerPush from '../Router';
import { navActivate } from '../../redux/nav/actions';

class NavMenu extends Component {
  state = { loginForm: false };
  onResponsiveMenu = () => {
    const { nav: { active } } = this.props;
    this.props.navActivate(!active);
  };

  onCloseMenu = () => {
    this.props.navActivate(false);
  };

  renderMenu() {
    const { nav } = this.props;

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
          <Anchor icon={<User />} a11yTitle='Open login form' onClick={() => this.setState({ loginForm: true })} />
        </Box>
      );
    }
    return menu;
  }
  render() {
    const { loginForm } = this.state;
    let layer;
    if (loginForm) {
      // layer = <Login onClose={() => this.setState({ loginForm: false })} />;
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
          <RoutedAnchor path='' label='crypto-grommet' a11yTitle='Go to home page' />
        </Box>
        {this.renderMenu()}
        {layer}
      </Box>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ navActivate }, dispatch);


const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
