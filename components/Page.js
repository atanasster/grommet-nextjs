import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Head from 'next/head';
import { Grommet, Box } from 'grommet';
import { ResponsiveContext } from 'grommet/contexts/ResponsiveContext';
import Header from './Header';
import Footer from './Footer';
import connect from '../redux';
import { selectTheme } from '../redux/themes/actions';

import { initGA, logPageView } from './utils/analytics';

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
      children, title: pageTitle, description, themes: { themes, selected: theme },
    } = this.props;
    const keywords = ['grommet', 'grommet 2', 'react', 'next-js', 'next.js', 'ui library'];
    if (pageTitle) {
      keywords.push(pageTitle);
    }
    return (
      <div>
        <Head>
          {pageTitle && (
            <title>{`Grommet - ${pageTitle}`}</title>
            )
          }
          {typeof description === 'string' && (
            <meta name='description' content={description} />
            )
          }
          <meta name='keywords' content={keywords.join(',')} />
        </Head>
        <Grommet theme={themes[theme] || {}} style={{ height: 'auto', minHeight: '100vh' }}>
          <ResponsiveContext.Consumer >
            {responsive => (
              <Box style={{ height: 'auto', minHeight: '100vh' }}>
                <Header title={pageTitle} responsive={responsive} />
                <Box flex={true}>
                  {children}
                </Box>
                <Footer />
              </Box>
              )}
          </ResponsiveContext.Consumer>
        </Grommet>
      </div>
    );
  }
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Page.defaultProps = {
  description: undefined,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTheme }, dispatch);

const mapStateToProps = state => ({
  themes: state.themes,
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));

