/** tab菜单(数字为用户id) */
// 1: '超管',
// 2: '管理员',
// 3: '审核员',
// 4: '研判员'

export const AuthEnum = {
  1: '超级管理员',
  2: '管理员',
  3: '审核员',
  4: '研判员'
};

/** 超管 */
const tab1 = [
  { title: '待分发', path: '/distribute' },
  { title: '待审核', path: '/audit' },
  { title: '已审核', path: '/audited' },
  { title: '无归属大队人员库', path: '/noBelongingPeopleLibrary' },
  { title: '考核统计', path: '/statistics' }
];
/** 管理员 */
const tab2 = tab1;
/** 审核员 */
const tab3 = [
  { title: '待分发', path: '/distribute' },
  { title: '待审核', path: '/audit' },
  { title: '已审核', path: '/audited' },
  { title: '考核统计', path: '/statistics' }
];
/** 研判员 */
const tab4 = [
  { title: '待研判', path: '/judge' },
  { title: '已研判', path: '/judged' }
];
export const taskMenuTabs = {
  1: tab1,
  2: tab2,
  3: tab3,
  4: tab4
};

/** 用户帐号id集合 */
export const userIds = Object.keys(AuthEnum).map((item) => Number(item));
