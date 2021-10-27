const Core = require('./core');
const shell = require('shelljs');
const webpack = require('webpack');
const config = require('../../config');
const { EventEmitter } = require('events');
const childProcess = require('child_process');
const WebpackDevServer = require('webpack-dev-server');
const RenderProcessWebpackConfig = require('./webpack/webpack.config.js');
const os = require('os');
const net = require('net');
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

  /**
   * 检测端口占用
   * @param port 端口号
   * @param callback 检测完成回调
   */
  portIsOccupied(port, callback) {
    const server = net.createServer().listen(port);
    server.on('listening', () => {
      server.close();
      callback(null, port);
    });
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        this.portIsOccupied(port + 1, callback);
      } else {
        callback(err);
      }
    });
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

    this.portIsOccupied(config.port, (err, port) => {
      if (err !== null) return;
      compiler.hooks &&
        compiler.hooks.done.tapAsync({ name: 'CompiledRenderProcessOnce' }, (compilation, callback) => {
          if (!this.AutoOpenApp._RenderProcessDone) this.AutoOpenApp._RenderProcessDone = true;
          callback();

          const localTitle = `- Local:   `.green;
          const localInner = `http://localhost:${port}/`.blue;
          const networkTitle = `- Network: `.green;
          const networkInner = `http://${this.GetIPAddress('IPv4')}:${port}/`.blue;
          console.info(``);
          console.info(`serve running at:`.rainbow);
          console.info(localTitle + localInner);
          console.info(networkTitle + networkInner);
        });
      new WebpackDevServer(compiler, devServerOptions).listen(port);
    });
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
