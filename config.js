const path = require('path');
const AntdTheme = require('./src/assets/css/antd/index.js');

const JoinCwd = (...args) => {
  if (!args.length) {
    return process.cwd();
  }
  return path.join(process.cwd(), ...args);
};

module.exports = {
  /** 开发运行时 runtime */
  nodemon: true,

  /** 开发运行时 runtime */
  eslint: false,

  /** 开发运行时 runtime */
  tslint: false,

  /** speed-measure-webpack-plugin */
  smp: false,

  /** 开发环境端口号 占用自动+1 */
  port: 8080,

  entry: {
    renderProcess: 'src/index.tsx'
  },
  antdTheme: AntdTheme,
  alias: {
    '~': JoinCwd(),
    '@': JoinCwd('src')
  },

  output: 'dist',
  publicPath: '/',
  devServer: {
    compress: true,
    inline: true,
    hot: true,
    port: 9999,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://192.168.23.75:6005',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  prefix: '/apis',
  hotUpdaterUri: 'http://118.24.173.102:10150'
};
