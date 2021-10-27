import GlobalStore from '@/store/Module/GlobalStore';
import SettingStore from '@/store/Module/SettingStore';

export default {
  Global: new GlobalStore(),
  Setting: new SettingStore()
};
