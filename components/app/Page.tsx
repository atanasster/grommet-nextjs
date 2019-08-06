import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Grommet, Box, ResponsiveContext } from 'grommet';
import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';
import { AppThemeContextConsumer, AppThemeContextProvider } from './AppThemeContext';


import { initGA, logPageView } from '../utils/analytics';

interface PageProps {
  title: string,
  description: string,
  nav: boolean,
  footer: boolean,
  sideBar: React.ReactNode,
}

class Page extends React.Component<PageProps> {
  static defaultProps = {
    description: undefined,
    nav: true,
    footer: true,
    sideBar: undefined,
  };

  componentDidMount() {
    if (!window['GA_INITIALIZED']) {
      initGA();
      window['GA_INITIALIZED'] = true;
    }
    logPageView();
  }

  render() {
    const {
      children, title: pageTitle, description,
      nav, footer, sideBar,
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
        <AppThemeContextProvider>
          <AppThemeContextConsumer>
            {({ themes, selected }) => (
              <Grommet theme={themes[selected] || {}} full={true}>
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
            )}
          </AppThemeContextConsumer>
        </AppThemeContextProvider>
      </React.Fragment>
    );
  }
}

export default Page;

