import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Heading,
  Paragraph,
  Anchor,
  Markdown,
  Box,
} from 'grommet';
import Page from '../Page';
import connect from '../../redux/index';
import Notifications from './Notifications';
import RoutedAnchor from './RoutedAnchor';
import NavMenu from './NavMenu';

const LargeParagraph = styled(Paragraph)`
  max-width: 100%;
`;

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      children, description, title, visibleTitle,
    } = this.props;
    let header;
    if (title) {
      header = (
        <Box direction='row' responsive={true} tag='header'>
          <Box margin={{ vertical: 'medium' }} align='start'>
            {visibleTitle || (
              <Heading margin='none' level={1}>
                <strong>{title}</strong>
              </Heading>)
            }
            {description ? (
              <Markdown
                components={{ p: { component: LargeParagraph, props: { size: 'medium' } } }}
              >
                {description}
              </Markdown>
            ) : null}
          </Box>
        </Box>
      );
    }
    return (
      <Page title={title} description={description} footer={false}>
        <Box pad={{ horizontal: 'large', top: 'medium' }}>
          <NavMenu />
          <Notifications />
          {header}
          {children}
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
              <RoutedAnchor
                path='/about'
                label='about'
                a11yTitle='About crypto-grommet'
              />
              <Anchor
                href='https://github.com/atanasster/crypto-grommet'
                target='_blank'
                label='git'
                a11yTitle='Go to the github page for this project'
              />
            </Box>
          </Box>
        </Box>
      </Page>
    );
  }
}

App.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  visibleTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

App.defaultProps = {
  description: undefined,
  visibleTitle: undefined,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(App);
