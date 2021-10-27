import React from 'react';
import { SwitchProps } from 'antd/lib/switch';
import { Switch as _Switch } from 'antd';

export const Switch: React.FC<{ style?: React.CSSProperties }> = ({ children, style }) => {
  return (
    <React.Fragment>
      <div className="app-class" style={style ?? {}}>
        {children}
      </div>
      ;
      <style jsx>{`
        .app-class {
        }
      `}</style>
    </React.Fragment>
  );
};
