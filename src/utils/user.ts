import { LoginApi$$Response } from '@/service';
import { SettingTypes } from '@/Types/SettingTypes';
import { storage } from './Storage';

export const getStorageUserInfo = (): LoginApi$$Response => storage.getItem('_user_info');

export const setStorageUserInfo = (user?: LoginApi$$Response) => {
  user ? storage.setItem('_user_info', JSON.stringify(user)) : storage.removeItem('_user_info');
};

const __LOGIN_INFO__ = 'login_info';

/** 设置登录用户信息 */
export const setLoginInfo = (userInfo = {}) => {
  localStorage.setItem(__LOGIN_INFO__, JSON.stringify(userInfo));
};
export const getLoginInfo = (): SettingTypes => {
  return JSON.parse(localStorage.getItem(__LOGIN_INFO__) || '{}');
};
export const removeLoginInfo = () => {
  localStorage.removeItem(__LOGIN_INFO__);
};
