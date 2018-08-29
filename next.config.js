const { IgnorePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');
const withTM = require('next-plugin-transpile-modules');

const initExport = {
  // eslint-disable-next-line no-unused-vars
  webpack: (config, env) => {
    config.plugins.push(new Dotenv({ path: './.env' }));
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
  transpileModules: ['grommet-controls', 'grommet', 'grommet-icons'],
};

module.exports = withTM(initExport);
