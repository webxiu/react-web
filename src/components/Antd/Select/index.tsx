import React, { useEffect, useRef, useState } from 'react';

import { Select as AntdSelect } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { OptionProps } from 'antd/lib/select';

interface BaseSelectProps {
  dataSource: OptionProps[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  width?: number;
  style?: React.CSSProperties;
}

export const Select: React.FC<BaseSelectProps> = ({ dataSource, defaultValue, value, onChange, width = 120, style }) => {
  const [open, setOpen] = useState(false);
  const REF = useRef(null);
  useEffect(() => {
    const closeSelectOpen = () => {
      setOpen(false);
    };
    window.document.addEventListener('click', closeSelectOpen);
    return () => {
      window.document.removeEventListener('click', closeSelectOpen);
    };
  }, []);
  return (
    <span ref={REF}>
      <AntdSelect
        getPopupContainer={(triggerNode) => {
          return REF.current as any;
        }}
        open={open}
        onClick={(e) => {
          // e.persist();
          // // 阻止合成事件间的冒泡
          // e.stopPropagation();
          // 阻止合成事件与最外层document上的事件间的冒泡
          e.nativeEvent.stopImmediatePropagation();
          /** 兼容点击图标也触发下拉选择框 */
          setOpen(!open);
        }}
        suffixIcon={<CaretDownOutlined style={{ color: '#b5b5be' }} />}
        className="g-select"
        value={value ?? undefined}
        defaultValue={defaultValue ?? undefined}
        style={{ ...style, width }}
        onChange={onChange ?? function () {}}
      >
        {dataSource.map((item) => (
          <AntdSelect.Option key={item.value} {...item}>
            {item.children}
          </AntdSelect.Option>
        ))}
      </AntdSelect>
      <style jsx global>{`
        .g-select.ant-select {
          margin-left: 20px;
        }

        .g-select.ant-select .ant-select-selector {
          border: 1px solid #4f4f5a;
          background-color: #111213;
          color: #b5b5be;
          border-radius: 10px;
          height: 38px;
          line-height: 38px;
        }

        .g-select.ant-select:hover .ant-select-selector,
        .g-select.ant-select.ant-select-focused .ant-select-selector {
          border-color: #4f4f5a !important;
        }

        .g-select.ant-select .ant-select-arrow {
          color: #b5b5be;
        }

        .g-select.ant-select .ant-select-selection-item {
          line-height: 38px;
        }

        .ant-select-dropdown {
          background: #111213;
          background-image: linear-gradient(135deg, #24262b 0%, #191c1f 100%);
        }

        .ant-select-dropdown .ant-select-item-option {
          color: #b5b5be;
        }

        .ant-select-dropdown .ant-select-item-option:hover {
          background: #1c1c24;
          color: #b5b5be;
        }

        .ant-select-dropdown .ant-select-item-option-selected {
          background-color: #1c1c24;
        }
        .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
          background-color: transparent;
        }
      `}</style>
    </span>
  );
};

export default Select;
