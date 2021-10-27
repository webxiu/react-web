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

  /** 主进程端口，开发环境渲染进程端口号 +=1 */
  port: 8089,

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
    port: 8080,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://192.168.0.75:6005',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  prefix: '/apis',
  hotUpdaterUri: 'http://118.24.173.102:10150'
};
