import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Grommet, Box, ResponsiveContext } from 'grommet';
import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';
import connect from '../../redux/index';

import { initGA, logPageView } from '../utils/analytics';

class Page extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    const {
      children, title: pageTitle, description,
      nav, footer, themes: { themes, selected: theme }, sideBar,
    } = this.props;
    const keywords = ['grommet', 'grommet 2', 'react', 'next-js', 'next.js', 'ui library'];
    if (pageTitle) {
      keywords.push(pageTitle);
    }
    return (
      <React.Fragment>
        <Head>
          {pageTitle && (
            <title>{`grommet-controls - ${pageTitle}`}</title>
            )
          }
          {typeof description === 'string' && (
            <meta name='description' content={description} />
            )
          }
          <meta name='keywords' content={keywords.join(',')} />
        </Head>
        <Grommet theme={themes[theme] || {}} full={true}>
          <ResponsiveContext.Consumer >
            {size => (
              <Box style={{ height: 'auto', minHeight: '100vh' }}>
                <Box direction='row'>
                  {sideBar || <SideMenu />}
                  <Box flex={true}>
                    {nav && <Header title={pageTitle} size={size} />}
                    <Box flex={true} pad='large'>
                      {children}
                    </Box>
                  </Box>
                </Box>
                {footer && <Footer /> }
              </Box>
              )}
          </ResponsiveContext.Consumer>
        </Grommet>
      </React.Fragment>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  nav: PropTypes.bool,
  footer: PropTypes.bool,
  sideBar: PropTypes.node,
};

Page.defaultProps = {
  description: undefined,
  nav: true,
  footer: true,
  sideBar: undefined,
};


const mapStateToProps = state => ({
  themes: state.themes,
});


export default connect(mapStateToProps)(Page);

