import { Button as AntdButton } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import React from 'react';

interface BaseButtonProps extends ButtonProps {}

export const Button: React.FC<BaseButtonProps> = ({ children, className, style, ...restProps }) => {
  return (
    <>
      <AntdButton className={`${className} g-button`} style={style} {...restProps}>
        {children}
      </AntdButton>
      <style jsx global>{`
        .g-button.ant-btn {
          font-size: 12px;
          background: #44444f;
          border-color: #44444f;
          color: #fff;
          border-radius: 10px;
          padding: 4px 25px;
        }
        .g-button.ant-btn.ant-btn-primary {
          background: #1e75ff;
          border-color: #1e75ff;
        }
        .g-button.ant-btn.ant-btn-sm {
          padding: 0 17px;
          height: 28px;
          border-radius: 8px;
        }
        .g-button.ant-btn.ant-btn-lg {
          padding: 4px 42px;
          height: 38px;
        }
        .g-button.ant-btn .ant-btn[disabled],
        .g-button.ant-btn .ant-btn[disabled]:hover,
        .g-button.ant-btn .ant-btn[disabled]:focus,
        .g-button.ant-btn .ant-btn[disabled]:active {
          color: rgba(255, 255, 255, 0.5);
          background: #777;
          border-color: #777;
        }
      `}</style>
    </>
  );
};
