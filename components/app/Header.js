import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';
import { Header as AppBar } from 'grommet-controls';
import RoutedButton from './RoutedButton';
import pushRoute from './PushRoute';
import SearchComponent from './SearchComponent';

class Header extends React.Component {
  state = {
    activeMenu: false,
  };

  onResponsiveMenu = () => {
    this.setState({ activeMenu: !this.state.activeMenu });
  };

  onCloseMenu = () => {
    this.setState({ activeMenu: false });
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

Header.defaultProps = {
  size: undefined,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Header;

