import { action, autorun, observable, runInAction, toJS } from 'mobx';
import { getLoginInfo, setLoginInfo } from '@/utils/user';

import DefaultLocalSetting from '@/Setting';
import { SettingTypes } from '@/Types/SettingTypes';
import { SplicingServeIPWithBaseURL } from '@/service/LoginServe';
import axios from '@/axios';

export default class {
  @observable settings: SettingTypes;

  constructor() {
    const loginInfo = getLoginInfo();
    this.settings = loginInfo.account ? loginInfo : DefaultLocalSetting;

    autorun(() => {
      /** @Message 动态设置界面修改的 BaseURL */
      // axios.defaults.baseURL = SplicingServeIPWithBaseURL(this.settings.serverHost, this.settings.serverPort);
    });
  }

  @action public SetSettings = async (newSetting: Partial<SettingTypes>) => {
    runInAction(() => {
      this.settings = Object.assign(toJS(this.settings), newSetting);
      const loginInfo = getLoginInfo();
      setLoginInfo({ ...loginInfo, ...newSetting });
    });
  };
}
