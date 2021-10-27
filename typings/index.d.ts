/**
 * @notice 注意: 修改"全局声明"必须在模块内部, 所以至少要有 @export{} 字样
 */
import React from 'react';

interface ProcessVersions extends NodeJS.ProcessVersions {
  brotli: string;
  chrome: string;
  electron: string;
  icu: string;
  llhttp: string;
  napi: string;
  nghttp2: string;
  unicode: string;
  build?: string;
  appName: string;
  appVersion: string;
}

declare global {
  export type DirPath = string;
  export type FilePath = string;
  export namespace $$ {
    const isPro: () => boolean;
    const JoinDirWithRoot: (...dir) => string;
    const isString: (arg) => Boolean;
    const isNumber: (arg) => Boolean;
    const isObject: (arg) => Boolean;
    const isUndefined: (arg) => Boolean;
    const isNull: (arg) => Boolean;
    const isFunction: (arg) => Boolean;
    const isAsyncFunction: (arg) => Boolean;
    const isPromise: (arg) => Boolean;
    const isArray: (arg) => Boolean;
    const isBoolean: (arg) => Boolean;
    /** 判断数值是否为有限 即除了正常的数值为true，其余诸如NaN, Infinity, '15'都为false */
    const isFinite: (arg) => Boolean;
    const isNaN: (arg) => Boolean;
    const AppInfo: Readonly<{
      versions: ProcessVersions;
    }>;

    export namespace log {
      const info: (message, ...logs) => void;
      const warn: (message, ...logs) => void;
      const error: (message, ...logs) => void;
    }
  }
}

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}
export {};
