const Core = require('./core');
const shell = require('shelljs');
const webpack = require('webpack');
const config = require('../../config');
const { EventEmitter } = require('events');
const childProcess = require('child_process');
const WebpackDevServer = require('webpack-dev-server');
const RenderProcessWebpackConfig = require('./webpack/webpack.config.js');
const os = require('os');
require('colors');

class Command extends EventEmitter {
  constructor() {
    super();
    this.AutoOpenApp = new Proxy(
      { _RenderProcessDone: false },
      {
        set: (target, props, value) => {
          const isOk = Reflect.set(target, props, value);
          if (target._RenderProcessDone) {
            this.emit('openApp');
          }
          return isOk;
        }
      }
    );
  }

  // 'IPv4' | 'IPv6'
  GetIPAddress(type) {
    const interfaces = os.networkInterfaces();
    let address = '127.0.0.1';
    for (const key in interfaces) {
      for (const item of interfaces[key]) {
        if (item.family === type && key === 'en0') {
          address = item.address;
          break;
        }
      }
    }
    return address;
  }
  /** Readme */
  childProcessExec(runPath) {
    const _childProcess = childProcess.exec(runPath);
    _childProcess.stdout.on('data', console.info);
    _childProcess.stdout.on('error', console.info);
    _childProcess.stderr.on('data', console.info);
    _childProcess.stderr.on('error', console.info);
  }

  /** Readme */
  async RenderProcess() {
    const compiler = webpack(RenderProcessWebpackConfig);
    if (Core.isPro()) return compiler.run(Core.RenderProcessPro);
    const userDevServer = config.devServer || {};
    const devServerOptions = {
      hot: true,
      open: true,
      hotOnly: true,
      noInfo: true,
      stats: 'errors-only',
      clientLogLevel: 'error',
      overlay: { errors: true, warnings: true },
      ...userDevServer
    };
    compiler.hooks &&
      compiler.hooks.done.tapAsync({ name: 'CompiledRenderProcessOnce' }, (compilation, callback) => {
        if (!this.AutoOpenApp._RenderProcessDone) this.AutoOpenApp._RenderProcessDone = true;
        callback();

        const localTitle = `- Local:   `.green;
        const localInner = `http://localhost:${config.port}/`.blue;
        const networkTitle = `- Network: `.green;
        const networkInner = `http://${this.GetIPAddress('IPv4')}:${config.port}/`.blue;
        console.info(``);
        console.info(`serve running at:`.rainbow);
        console.info(localTitle + localInner);
        console.info(networkTitle + networkInner);
      });
    new WebpackDevServer(compiler, devServerOptions).listen(config.port);
  }

  /** Readme */
  build() {
    process.env.NODE_ENV = 'production';
    this.RenderProcess();
  }

  /** Readme */
  start() {
    process.env.NODE_ENV = 'development';
    this.once('openApp', () => {
      if (config.tslint) this.childProcessExec(`tsc -w`);
    });
    this.RenderProcess();
  }

  /** Readme */
  help() {
    console.log(`
    Command:    node electron-cli-service

    Options:    [start, build, kill]
    `);
  }

  /** Extends */
  autoVersion() {
    require('../run/auto-version');
  }

  /** Extends */
  autoService() {
    require('../run/auto-service');
  }
}

module.exports = Command;
