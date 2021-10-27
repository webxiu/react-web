import Package from '~/package.json';
import gbLogo from '@/assets/logoText/深圳国保智能文档分析系统.png';
import gyLogo from '@/assets/logoText/国音智能文档分析系统.png';

export const logoType = {
  国音智能文档分析系统: gyLogo,
  深圳国保智能文档分析系统: gbLogo
};

Reflect.set(global, '$$', {});

const Build = {
  appVersion: Package.version.split('-')[0],
  appName: Package.appName,
  build: Package.version.split('-')[1]
};
document.title = Package.appName;

Reflect.set($$, 'AppInfo', {
  versions: { ...process.versions, ...Build }
});

Reflect.set($$, 'isPro', () => process.env.NODE_ENV === 'production');
Reflect.set($$, 'isString', (arg) => Reflect.toString.call(arg) === '[object String]');
Reflect.set($$, 'isNumber', (arg) => Reflect.toString.call(arg) === '[object Number]');
Reflect.set($$, 'isObject', (arg) => Reflect.toString.call(arg) === '[object Object]');
Reflect.set($$, 'isUndefined', (arg) => Reflect.toString.call(arg) === '[object Undefined]');
Reflect.set($$, 'isNull', (arg) => Reflect.toString.call(arg) === '[object Null]');
Reflect.set($$, 'isFunction', (arg) => Reflect.toString.call(arg) === '[object Function]');
Reflect.set($$, 'isAsyncFunction', (arg) => Reflect.toString.call(arg) === '[object AsyncFunction]');
Reflect.set($$, 'isPromise', (arg) => Reflect.toString.call(arg) === '[object Promise]');
Reflect.set($$, 'isArray', (arg) => Reflect.toString.call(arg) === '[object Array]');
Reflect.set($$, 'isBoolean', (arg) => Reflect.toString.call(arg) === '[object Boolean]');
/** 判断数值是否为有限 即除了正常的数值为true，其余诸如NaN, Infinity, '15'都为false */
Reflect.set($$, 'isFinite', (arg) => Number.isFinite(arg));
Reflect.set($$, 'isNaN', (arg) => Number.isNaN(arg));
