const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackModuleConfig = require('./scripts/ecs/webpack/Render/webpack.module.config');
const WebpackPluginsConfig = require('./scripts/ecs/webpack/Render/webpack.plugins.config');
const WebpackTerserConfig = require('./scripts/ecs/webpack/Render/webpack.terser.config');

const JoinCwd = (...args) => {
  if (!args.length) {
    return process.cwd();
  }
  return path.join(process.cwd(), ...args);
};

module.exports = {
  plugins: WebpackPluginsConfig.plugins,
  module: WebpackModuleConfig.module,
  optimization: WebpackTerserConfig.optimization,
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === 'development' ? false : 'cheap-module-source-map',
  target: 'web',
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: process.env.NODE_ENV === 'development' ? 'assets/js/[name].[hash:8].js' : 'assets/js/[name].js'
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '~': JoinCwd(),
      '@': JoinCwd('src')
    }
  },
  devServer: {
    compress: true,
    inline: true,
    hot: true,
    port: 8080,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://192.168.0.75:6005',
        pathRewrite: { '^/api': '' }
      }
    }
  }
};
