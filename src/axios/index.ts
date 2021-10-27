/**
 * @baseURL
 * @/store/Module/SettingStore ~~ constructor/autorun 自动根据用户修改的值设置
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { BaseServeResponse } from '@/Types/BaseTypes';
import { ResponseErrorDesc } from '@/config/response.config';
import { getStorageUserInfo } from '@/utils/user';
import { message } from 'antd';

interface AppAxiosRequestConfig<T> extends AxiosRequestConfig {
  params: T;
}

const instance = axios.create({
  timeout: 25000,
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false
});

/** request过滤器 */
instance.interceptors.request.use(
  (config: AxiosResponse<BaseServeResponse<{}>>) => {
    config.headers['Authorization'] = 'Bearer ' + getStorageUserInfo()?.token;
    const resultConfig = removeTrim(config);
    return resultConfig;
  },
  (err) => {
    return Promise.reject(err);
  }
);

/** response过滤器 */
instance.interceptors.response.use(
  (response) => {
    /** 存在错误 */
    if (response.data?.hasError) {
      response.data.errorDesc = ResponseErrorDesc[response.data.errorDesc] || '操作失败';
      return Promise.reject(response);
    }
    // 未登录
    if (response.data?.status === 401) {
      message.error('系统超时，请重新登录');
      setTimeout(() => {
        window.location.href = '/login';
      }, 1000);
    }
    return response;
  },
  (err) => {
    /** 处理取消多个重复弹窗 */
    if (axios.isCancel(err) && err.message !== 'custom') {
      message.warn(err.message || '已取消请求！');
    }
    if (err?.response?.data?.hasError) {
      err.response.data.errorDesc = ResponseErrorDesc[err.response.data.errorDesc] || '操作失败';
    }
    return Promise.reject(err);
  }
);

/** 去除请求参数中的前后空格 */
const removeTrim = (config: AxiosResponse<BaseServeResponse<{}>>) => {
  const type = Object.prototype.hasOwnProperty.call(config, 'params') ? 'params' : 'data';
  const data = config[type];
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      if (typeof data[key] === 'string') {
        data[key] = data[key].trim();
      }
    }
  }
  config[type] = data;
  return config;
};

export { AxiosRequestConfig, AppAxiosRequestConfig, AxiosResponse };

/** 当需要 终止请求的时候 请求参数使用该方法构造一下，终止时，调用 fn['abort']() 即可 */
export const InjectAbort = (fn: Function, param?: object) => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  const _param = $$.isObject(param) ? param : {};
  fn['abort'] = source.cancel;
  return {
    ..._param,
    cancelToken: source.token
  };
};

/** 返回axios实例 */
export default instance;
