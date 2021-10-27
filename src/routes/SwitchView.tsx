/**
 * @路由配置规则
 * 一级目录配置为无业务相关的。比如没有没有主窗口或者主窗口不一的
 * 二级目录为业务相关联，比如主要窗口内切换页面
 */

import { LocationState, Path } from 'history';
import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { getStorageUserInfo, setStorageUserInfo } from '@/utils/user';

import { BaseRouteChange } from './BaseWrap';
import RouterWrapNotFound from '@/components/NotFound';
import RouterWrapPages from '@/pages/index';
import RouterWrapSpin from '@/components/Spin';
import Store from '@/store';
import { message } from 'antd';

/**
 * @private
 *
 * @全局路由包装组件
 */

export const PackingWithAuth: React.FC = ({ children }) => {
  const onChange = (from: string, to: string, next: (path: Path, state?: LocationState) => void) => {
    // if ('登录状态失效') { message.success('登录状态失效，请重新登录'); next('/login') }
    if (/login/.test(window.location.href)) return;
    if (!getStorageUserInfo() || !Store.Global.userInfo) {
      message.warn('登录状态已失效！请重新登录');
      setStorageUserInfo();
      window.location.href = '/#/login';
    }
  };
  return (
    <BaseRouteChange onChange={onChange}>
      <Suspense fallback={<RouterWrapSpin />}>
        <Switch>
          {children}
          <Route path="*" component={RouterWrapNotFound}></Route>
        </Switch>
      </Suspense>
    </BaseRouteChange>
  );
};

/**
 * @public
 *
 * @全局一级路由
 */
export const SwitchViewRoot = () => (
  <PackingWithAuth>
    <Route path="/" exact component={RouterWrapPages}></Route>
    <Route path="/login" component={lazy(() => import('@/pages/Login'))}></Route>
    <Route path="/home" component={lazy(() => import('@/pages/Home'))}></Route>
  </PackingWithAuth>
);

/**
 * @public
 *
 * @Home二级级路由
 */
export const SwitchViewHome = () => (
  <PackingWithAuth>
    <Route path="/home/" exact component={() => <Redirect to="/home/dashboard" />}></Route>
    <Route path="/home/dashboard" component={lazy(() => import('@/pages/Home/Dashboard'))}></Route>
    <Route path="/home/setting" component={lazy(() => import('@/pages/Home/Settings'))}></Route>
    <Route path="/home/statistic" component={lazy(() => import('@/pages/Home/Statistic'))}></Route>
  </PackingWithAuth>
);
