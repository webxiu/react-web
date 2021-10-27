import AppMenu from '@/components/Menu';
import { Layout } from '@/components/Antd';
import React from 'react';
import { SwitchViewHome } from '@/routes/SwitchView';

window.onerror = (err) => {
  console.log('错误====> ', err);
};

const Wrap: React.FC = () => {
  return (
    <Layout>
      <Layout.Header>
        <AppMenu />
      </Layout.Header>
      <Layout.Content>
        <SwitchViewHome />
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
};

export default Wrap;
