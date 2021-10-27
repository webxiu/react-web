/**
 * @打包号
 * 打包build号
 * 项目多名称配置打包
 * @打包号  process.env.BUILD_NUMBER
 * @打包类别  process.env.BUILD_APPTYPE ${guobao | speakin}
 */

const fs = require('fs-extra');
const path = require('path');
let PackageJson = require('../../package.json');

const buildPackageFilePath = path.join(process.cwd(), 'package.json');
const { BUILD_NUMBER, BUILD_APPTYPE } = process.env;
const _AppTypes = {
  guobao: {
    name: '深圳国保智能文档分析系统',
    enName: 'Intelligent Analysis System Presented By Speakin'
  },
  speakin: {
    name: '国音智能文档分析系统',
    enName: 'Intelligent Analysis System Presented By Speakin'
  }
};

/**
 * @output ${清空目录 }
 */
fs.emptyDirSync(path.join(process.cwd(), 'dist'));

/**
 * @服务器打包
 * @prebuild 配置打包软件名称，Build 号 写入 package.json
 */
if (BUILD_NUMBER && BUILD_APPTYPE) {
  const buildAppInfo = _AppTypes[BUILD_APPTYPE] ? _AppTypes[BUILD_APPTYPE] : _AppTypes.speakin;
  let __PackageJson = JSON.parse(JSON.stringify(PackageJson));
  /** 修改 appName */
  __PackageJson.appName = buildAppInfo.name;
  /** 修改 软件打包名称添加版本号 xxx Setup version-build.xx */
  __PackageJson.version = `${__PackageJson.version}-${process.env.BUILD_NUMBER}`;

  fs.writeFileSync(buildPackageFilePath, JSON.stringify(__PackageJson, null, 2), { encoding: 'utf-8' });
}
