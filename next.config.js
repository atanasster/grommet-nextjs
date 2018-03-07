const { IgnorePlugin } = require('webpack');
const router = require('./server/routes');
const Dotenv = require('dotenv-webpack');


const initExport = {
  // eslint-disable-next-line no-unused-vars
  webpack: (config, { dev }) => {
    config.plugins.push(new Dotenv({ path: './public.env' }));
    config.plugins.push(new IgnorePlugin(/^\.\/locale$/, /moment$/));

    if (process.env.ANALYZE_BUILD) {
      // eslint-disable-next-line global-require
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        })
      );
    }
    return config;
  },
};

if (process.env.STATIC_EXPORT) {
  initExport.exportPathMap = function exportPathMap() {
    const routes = {};
    routes['/'] = {
      page: 'index',
    };
    router.routes.forEach((route) => {
      if (!route.pattern.includes(':')) {
        routes[route.pattern] = {
          page: route.page,
        };
      }
    });

    return routes;
  };
}

module.exports = initExport;
