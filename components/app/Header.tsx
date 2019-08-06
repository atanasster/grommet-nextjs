import React from 'react';
import { Box, Heading } from 'grommet';
import { Header as AppBar } from 'grommet-controls';
import RoutedButton from './RoutedButton';
import pushRoute from './PushRoute';
import SearchComponent from './SearchComponent';

interface HeaderProps {
  title: string,
  size?: string,
}

interface HeaderState {
  activeMenu: boolean,
}


class Header extends React.Component<HeaderProps, HeaderState> {
  state = {
    activeMenu: false,
  };

  onResponsiveMenu = () => {
    const { activeMenu } = this.state;
    this.setState({
      activeMenu: !activeMenu,
    });
  };

  onCloseMenu = () => {
    this.setState({
      activeMenu: false,
    });
  };

  onSearchSelect = ({ component, library }) => {
    pushRoute({
      route: 'documentation',
      params: {
        library,
        component,
      },
    });
  };

  render() {
    const { title: pageTitle, size } = this.props;
    const keywords = ['grommet', 'grommet 2', 'react', 'next-js', 'next.js', 'ui library'];
    if (pageTitle) {
      keywords.push(pageTitle);
    }
    return (
      <AppBar
        elevation='none'
      >
        {size !== 'small' && (
          <Heading margin='none'>
            <RoutedButton path='/'>
                grommet-controls
            </RoutedButton>
          </Heading>
        )}
        <Box direction='row'>
          <SearchComponent
            onChange={this.onSearchSelect}
          />
        </Box>
      </AppBar>
    );
  }
}

export default Header;

