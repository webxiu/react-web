import { Dropdown, Menu } from 'antd';
import React, { Fragment } from 'react';

import HeadPortrait from '@/assets/img/HeadPortrait/user.png';
import logo from '@/assets/img/logo.png';
import { logoType } from '@/config/global';
import { observer } from 'mobx-react';
import { setStorageUserInfo } from '@/utils/user';
import { useHistory } from 'react-router';
import { useInject } from '@/components/Hooks';

export interface BaseHeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Logo: React.FC = () => {
  return (
    <div className="flex just-center align-center">
      <img className="logo" src={logo} alt={$$.AppInfo.versions.appName} />
      <img className="title" width="270" height="40" src={logoType[$$.AppInfo.versions.appName]} alt="" />
      <style jsx>{`
        .logo {
          width: 40px;
          margin-right: 10px;
          vertical-align: middle;
        }
        .title {
          vertical-align: middle;
          margin-bottom: -3px;
        }
      `}</style>
    </div>
  );
};

export const Header: React.FC<BaseHeaderProps> = observer((props) => {
  const { Global } = useInject('Global');
  const { push } = useHistory();
  return (
    <React.Fragment>
      <header className={`${props.className ? props.className : ''} drag flex align-center ui-pl-60 ui-pr-30`} style={props.style ?? {}}>
        <Logo />
        <div className="flex-1 ui-h-100 flex align-center">{props.children}</div>
        {props.children && (
          <div className="flex just-center align-center no-drag ui-h-100">
            <Dropdown
              overlayStyle={{ top: 51 }}
              trigger={['click']}
              arrow
              placement="bottomCenter"
              overlay={
                <Menu>
                  <Menu.Item
                    onClick={() => {
                      setStorageUserInfo();
                      push('/login');
                    }}
                  >
                    <span className="color-fff">退出登录</span>
                  </Menu.Item>
                </Menu>
              }
            >
              <span className="flex just-center align-center word-nowrap cursor">
                {Global.userInfo && (
                  <Fragment>
                    <img width="18" src={HeadPortrait} alt="" />
                    <span className="ui-ml-4">{Global.userInfo.group_info.name}</span>
                    <span>-</span>
                    <span>{Global.userInfo.name}</span>
                  </Fragment>
                )}
              </span>
            </Dropdown>
          </div>
        )}

        <div>{/* <SystemController os={process.platform} /> */}</div>
      </header>
      <style jsx>{`
        header {
          height: 70px;
          background: var(--headbgc);
          color: #fff;
        }
      `}</style>
    </React.Fragment>
  );
});

export default Header;
