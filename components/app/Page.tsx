import React, { useEffect, useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { withRouter, Router } from 'next/router';
import Head from 'next/head';
import { Grommet, Box, ResponsiveContext } from 'grommet';
import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';
import { AppThemeContext, AppThemeContextConsumer, AppThemeContextProvider } from './AppThemeContext';
import { initGA, logPageView } from '../utils/analytics';

interface PageThemeRouterProps {
  router: Router,
}

const PageTheme: React.FC<PageThemeRouterProps> = ({ router, children }) => {
  const { selectTheme } = useContext(AppThemeContext);
  useEffect(() => {
    selectTheme(router.query.theme as string);
  }, [router.query.theme]);
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

const PageThemeRouter = withRouter(PageTheme);

interface PageProps {
  title: string,
  description?: string,
  nav?: boolean,
  footer?: boolean,
  sideBar?: React.ReactNode,
}

const Page: React.FC<PageProps> = ({
  children, title: pageTitle, description,
  nav, footer, sideBar,
}) => {
  useEffect(() => {
    // @ts-ignore
    if (!window.GA_INITIALIZED) {
      initGA();
      // @ts-ignore
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
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
        <PageThemeRouter />
        <AppThemeContextConsumer>
          {({ themes, selected }) => (
            <Grommet theme={themes[selected] || {}} full={true}>

              <ResponsiveContext.Consumer>
                {size => (
                  <Box
                    style={{
                      height: 'auto', minHeight: '100vh',
                    }}
                  >
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
};

Page.defaultProps = {
  nav: true,
  footer: true,
};

export default Page;

