import { Badge, Dropdown, Menu } from 'antd';
import { ListGroupOnlyApi, ListGroupOnlyApi$$Response, ListTagApi, ListTagApi$$Response } from '@/service';
import React, { useEffect, useState } from 'react';

import { Modal as CustomModal } from '@/components/Antd';
import Icon_ChartActive from '@/assets/img/chart_select.png';
import Icon_ChartDefault from '@/assets/img/chart_default.png';
import Icon_HomeActive from '@/assets/img/home_select.png';
import Icon_HomeDefault from '@/assets/img/home_default.png';
import { getStorageUserInfo } from '@/utils/user';
import { session } from '@/utils/Storage';
import { useHistory } from 'react-router';
import { useInject } from '@/components/Hooks';
import { useObserver } from 'mobx-react';
import { userIds } from '@/config/config.userManage';

interface MenuOptionType {
  title: string;
  link: string;
  icon: { default: string; active: string };
  color: { default: string; active: string };
  children?: { title: string; link: string }[];
}

const MenuOptionsDefaultColor = '#696974';
const MenuOptionsActiveColor = '#ffffff';

const MenuOptions: MenuOptionType[] = [
  {
    title: '首页',
    link: '/home/dashboard',
    icon: {
      default: Icon_HomeDefault,
      active: Icon_HomeActive
    },
    color: {
      default: MenuOptionsDefaultColor,
      active: MenuOptionsActiveColor
    }
  },
  {
    title: '分级研析',
    link: '/home/statistic',
    icon: {
      default: Icon_ChartDefault,
      active: Icon_ChartActive
    },
    color: {
      default: MenuOptionsDefaultColor,
      active: MenuOptionsActiveColor
    }
  },
  {
    title: '设置',
    link: '/home/setting',
    icon: {
      default: Icon_ChartDefault,
      active: Icon_ChartActive
    },
    color: {
      default: MenuOptionsDefaultColor,
      active: MenuOptionsActiveColor
    }
  }
];

const Wrap: React.FC = () => {
  const { Global } = useInject('Global');
  const { push, location } = useHistory();
  const [visibleMark, setVisibleMark] = useState<boolean>(false);
  const [visibleUser, setVisibleUser] = useState<boolean>(false);
  const isActive = (path: string): 'default' | 'active' => {
    return location.pathname.indexOf(path) >= 0 ? 'active' : 'default';
  };
  /** 获取本地存储用户信息 */
  const StrorageUserInfo = getStorageUserInfo();

  useEffect(() => {
    peopleGroupList();
    peopleMarkList();
    Global.updateWaitingNum();
  }, [Global.userInfo, StrorageUserInfo]);

  /** 获取归属大队列表 */
  const peopleGroupList = () => {
    //ListGroupApi 此接口包含支队
    ListGroupOnlyApi({})
      .then(({ data }) => {
        const res: ListGroupOnlyApi$$Response = data.data;
        Global.setGroupList(res?.group_info_list || []);
      })
      .catch((error: Error) => {
        console.log('GroupApi:', error);
      });
  };

  /** 获取人员标签列表 */
  const peopleMarkList = () => {
    ListTagApi({})
      .then(({ data }) => {
        const res: ListTagApi$$Response = data.data;
        Global.setMarkList(res.tag_info_list);
      })
      .catch((error: Error) => {
        console.log('TagApi:', error);
      });
  };

  const getChildrenMenu = (children) => {
    return (
      <Menu className="drop-menu">
        {children.map((item) => (
          <Menu.Item key={item.link}>
            <span
              onClick={() => {
                if (item.link === '/home/markManage') {
                  if (StrorageUserInfo?.role_info?.id !== userIds[2]) {
                    setVisibleMark(true);
                  }
                } else if (item.link === '/home/userManage') {
                  setVisibleUser(true);
                } else {
                  push(item.link);
                  /** 导航切换时清理文档库和人员库的列表分页记录 */
                  window.sessionStorage.removeItem('docs_library_list_page');
                  window.sessionStorage.removeItem('people_library_list_page');
                  session.removeItem('_DOC_QUERY');
                }
              }}
              className={item.link === '/home/markManage' && StrorageUserInfo?.role_info?.id === userIds[2] ? 'disabled-mark' : ''}
              title={item.link === '/home/markManage' && StrorageUserInfo?.role_info?.id === userIds[2] ? '没有权限' : ''}
              style={{ display: 'inline-block', padding: '5px 12px' }}
            >
              {item.title}
            </span>
          </Menu.Item>
        ))}

        <CustomModal
          title="标签管理"
          headerBorder={true}
          width={800}
          style={{ top: '10%' }}
          visible={visibleMark}
          onCancel={() => setVisibleMark(false)}
          footer={null}
        >
          <div style={{ height: 520, overflowY: 'auto', padding: '10px 36px' }}>
            <MarkManage visibleMark={visibleMark} />
          </div>
        </CustomModal>
        <CustomModal title="用户管理" headerBorder={true} width={1200} visible={visibleUser} onCancel={() => setVisibleUser(false)} footer={null}>
          <div style={{ height: 520, padding: '0 36px' }}>{visibleUser && <UserManage />}</div>
        </CustomModal>
        <style jsx global>{`
          .disabled-mark {
            cursor: not-allowed;
            color: #909090 !important;
          }
          .drop-menu .ant-dropdown-menu-item,
          .drop-menu .ant-dropdown-menu-submenu-title {
            padding: 0;
          }
        `}</style>
      </Menu>
    );
  };

  return useObserver(() => (
    // return (
    <ul className="flex ui-h-100 ui-m-0 no-drag ui-pl-40">
      {MenuOptions.map((item) => {
        return item.children ? (
          <li key={item.link} className="flex align-center ui-pl-20 ui-pr-20 cursor-d ui-hover word-nowrap">
            <Dropdown overlay={getChildrenMenu(item.children)} trigger={['hover']} key={item.link} arrow placement="bottomCenter">
              <div>
                <img src={item.icon[isActive(item.children[0]?.link)]} alt={item.children[0]?.title} />
                <span className="ui-ml-8" style={{ color: item.color[isActive(item.children[0]?.link)] }}>
                  {item.title}
                </span>
              </div>
            </Dropdown>
          </li>
        ) : (
          <li
            key={item.link}
            className="flex align-center ui-pl-20 ui-pr-20 cursor-d ui-hover word-nowrap"
            onClick={() => {
              /** 导航切换时清理文档库和人员库的列表分页记录 */
              window.sessionStorage.removeItem('docs_library_list_page');
              window.sessionStorage.removeItem('people_library_list_page');
              /** 人员库: 默认显示身份证人员库 */
              window.localStorage.removeItem('people_library_tab_id_type');
              session.removeItem('_DOC_QUERY');
              push(item.link);
            }}
            style={{ position: 'relative' }}
          >
            {/* 
            
            不要单独解构出waitingNum 会导致响应式丢失, 使用Global.waitingNum  
            <Badge>组件切换用户登录更新失败, 暂时不使用
            */}
            {/* <Badge
              className="site-badge-count-theme"
              count={item.title === '任务管理' && Global.waitingNum >= 0 ? Global.waitingNum : 0}
              overflowCount={999}
              offset={[12, -6]}
            > */}
            <img src={item.icon[isActive(item.link)]} alt={item.title} />
            <span className="ui-ml-8" style={{ color: item.color[isActive(item.link)] }}>
              {item.title}
            </span>
            {/* </Badge> */}
            {item.title === '任务管理' ? <span className="numb">{Global.waitingNum > 999 ? `999+` : Global.waitingNum}</span> : null}
          </li>
        );
      })}
      <style jsx>{`
        .numb {
          background-color: rgb(195, 0, 0);
          color: #fff;
          box-shadow: none;
          padding: 0px 8px;
          text-align: center;
          border-radius: 10px;
          position: absolute;
          line-height: 20px;
          white-space: nowrap;
          top: 11px;
          left: calc(100% - 25px);
          font-size: 12px;
        }
      `}</style>
    </ul>
  ));
};

export default Wrap;
