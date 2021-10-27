/**
 * @持久化配置 【默认配置】
 */

import { SettingTypes } from '@/Types/SettingTypes';

const DefaultLocalSetting: SettingTypes = {
  account: 'superadmin',
  password: 'admin123',
  serverHost: '192.168.0.75',
  serverPort: '6005',
  hotUpdater: false
};

export default DefaultLocalSetting;
