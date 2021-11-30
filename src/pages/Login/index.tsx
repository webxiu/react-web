import { Button, Checkbox, message } from 'antd';
import { LoginApi, LoginApi$$Request, LoginApi$$Response, PingApi } from '@/service';
import { getStorageUserInfo, setStorageUserInfo } from '@/utils/user';

import { Layout } from '@/components/Antd';
import React from 'react';
import VideoBackground from '@/components/VideoBackground';
import { logoType } from '@/config/global';
import { useHistory } from 'react-router';
import { useInject } from '@/components/Hooks';
import { useObserver } from 'mobx-react';

console.log(`$$`, $$);

const Login: React.FC = () => {
  const { Global } = useInject('Setting', 'Global');
  const { push } = useHistory();
  const [account, setAccount] = React.useState<string>('10001');
  const [password, setPassword] = React.useState<string>('123456');
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const [RememberMe, setRememberMe] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setAccount(localStorage.getItem('__account') ?? account);
    setPassword(localStorage.getItem('__password') ?? password);
  }, []);

  const onLogin = () => {
    if (!account || !password) {
      return setErrorMessage('用户名或密码不能为空');
    }
    setLoading(true);
    setStorageUserInfo({
      token: '321324f56sf4s6df',
      id: 1,
      account: '10001',
      name: '张三',
      role_info: {},
      /** 大队信息 */
      group_info: {}
    } as LoginApi$$Response);

    setErrorMessage('');
    if (RememberMe) {
      localStorage.setItem('__account', account);
      localStorage.setItem('__password', password);
    } else {
      localStorage.removeItem('__account');
      localStorage.removeItem('__password');
    }

    message.success('登录成功', 0.5, () => {
      setLoading(false);
      push('/home');
      Global.setUserInfo(getStorageUserInfo() as LoginApi$$Response);
    });
  };

  return useObserver(() => (
    <Layout>
      <Layout.Header></Layout.Header>
      <Layout.Content style={{ padding: 0 }}>
        <section className="ui-w-100 ui-h-100 flex just-center align-start drag" style={{ background: 'var(--blackc)', overflow: 'hidden' }}>
          <VideoBackground>
            <div className="ui-w-100 ui-h-100 flex just-center align-center">
              <div className="flex-col just-center align-center">
                <p>
                  <img src={logoType[$$.AppInfo.versions.appName]} alt="" />
                </p>
                <p className="f16 ui-pb-20" style={{ color: 'var(--greyc)' }}>
                  Intelligent Analysis System Presented By Speakin
                </p>

                <div className="form no-drag ui-p-40">
                  <React.Fragment>
                    <div className="form-item">
                      <input
                        placeholder="请输入账号..."
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                        onKeyUp={(e) => e.key === 'Enter' && onLogin()}
                        autoComplete="off"
                      />
                      <span>账号</span>
                    </div>
                    <div className="form-item">
                      <input
                        autoComplete="new-password"
                        placeholder="请输入密码..."
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyUp={(e) => e.key === 'Enter' && onLogin()}
                      />
                      <span>密码</span>
                    </div>
                    {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
                    <div className="flex just-end ui-pb-20 ui-pt-10">
                      <div className="flex-1">
                        <Checkbox
                          checked={RememberMe}
                          onChange={(e) => {
                            setRememberMe(e.target.checked);
                          }}
                        >
                          <span style={{ color: 'var(--greyc)' }}>记住账号密码</span>
                        </Checkbox>
                      </div>
                    </div>
                    <Button type="primary" style={{ width: '100%', height: '48px', borderRadius: '10px' }} loading={loading} onClick={onLogin}>
                      登录
                    </Button>
                  </React.Fragment>
                </div>

                <span style={{ color: 'var(--greyc)', marginTop: '35px' }}>
                  {$$.AppInfo.versions.appVersion} Build({$$.AppInfo.versions.build ?? 'Local'})
                </span>
              </div>
            </div>
          </VideoBackground>

          <style jsx>{`
            .form {
              background: #1c1c24;
              border-radius: 20px;
              position: relative;
              padding: 40px;
            }
            .form-popup {
              position: absolute;
              top: 50%;
              left: 0;
              right: 0;
              margin: auto;
              transform: translateY(-50%);
              background: #1c1c24;
              width: 260px;
              height: 230px;
              border-radius: 20px;
              padding: 20px;
              box-shadow: 0 0 10px #000;
            }
            .form-popup .form-item {
              height: 32px;
              width: 100%;
            }
            .form-item {
              height: 48px;
              overflow: hidden;
              width: 500px;
              margin-bottom: 20px;
              position: relative;
            }
            .form-item.width-label input {
              padding-left: 80px;
            }
            .form-item input {
              outline: none;
              border: 1px solid var(--greyc);
              background: transparent;
              height: 100%;
              width: 100%;
              padding: 0 15px;
              padding-left: 55px;
              border-radius: 10px;
              color: #fff;
            }
            .form-item input:hover,
            .form-item input:active,
            .form-item input:focus {
              border-color: #50b5ff;
            }
            .color-hover {
              color: var(--greyc);
              cursor: default;
            }
            .color-hover:hover {
              color: #50b5ff;
            }
            .form-item input:hover ~ span,
            .form-item input:active ~ span,
            .form-item input:focus ~ span {
              color: #50b5ff;
            }
            .form-item span {
              position: absolute;
              left: 15px;
              top: 50%;
              transform: translateY(-40%);
              color: var(--greyc);
            }
            .error-message {
              color: #ff6363;
            }
          `}</style>
        </section>
      </Layout.Content>
    </Layout>
  ));
};

export default Login;
