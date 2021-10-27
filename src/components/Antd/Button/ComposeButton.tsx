import { Radio } from 'antd';
import { RadioProps } from 'antd/lib/radio';
import React from 'react';

interface BaseRadioProps extends RadioProps {
  isSeparate?: boolean;
  defaultValue?: string | number;
}

const ComposeButton: React.FC<BaseRadioProps> = ({ children, style, isSeparate = false, ...restProps }) => {
  return (
    <>
      <Radio.Group
        size="middle"
        buttonStyle="solid"
        {...restProps}
        defaultValue={restProps.defaultValue}
        style={style}
        className={`${isSeparate ? 'radio-separate' : ''} import-button`}
      >
        {children}
      </Radio.Group>
      <style jsx global>{`
        .import-button .ant-radio-button-wrapper {
          min-width: 98px;
          color: #b5b5be;
          font-family: PingFangSC-Semibold;
          text-align: center;
          font-size: 12px;
        }
        .ant-radio-button-wrapper {
          border: none;
          background: #4a4a4a;
          border-right: 1px solid #3a3a3a;
        }
        .ant-radio-button-wrapper:not(:first-child)::before {
          width: 0px;
        }
        .ant-radio-button-wrapper:first-child {
          border-left: none;
          border-radius: 10px 0 0 10px;
        }
        .ant-radio-button-wrapper:last-child {
          border-right: none;
          border-radius: 0 10px 10px 0;
        }
        .radio-separate .ant-radio-button-wrapper {
          box-shadow: 0 0 1px 1px inset #4f4f5a;
          border-radius: 10px;
          background: transparent;
          margin-right: 20px;
        }

        .radio-separate .ant-radio-button-wrapper-checked {
          box-shadow: 0px 0px 1px 1px #1890ff !important;
        }
      `}</style>
    </>
  );
};

export { ComposeButton };
