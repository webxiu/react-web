import Uploader, { UploadFileTypes } from '@/axios/Uploader';

import { AppEventNames } from '~/src/Types/EventTypes';
import { AxiosRequestConfig } from 'axios';

export const Update = () => {
  // const file: File = [];
  // new Uploader(file, { url: '/v1/upload/file' }).upload();
};

/**
 * 上传文件
 * @param file 文件
 * @param options 配置项
 */
export const apiNLPFileUpload = (file: UploadFileTypes, options?: AxiosRequestConfig) => {
  const _uploader = new Uploader(file, { url: '/v1/upload', ...options }).upload();
  window['CancelUpload'] = _uploader.cancel.bind(_uploader);
  return _uploader;
};
