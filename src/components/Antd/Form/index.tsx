/* eslint-disable @typescript-eslint/no-explicit-any */

import { Form as AntdForm, DatePicker, Input, Select } from 'antd';
import { FormItemProps, FormListProps, FormProps } from 'antd/lib/form';
import React, { useImperativeHandle } from 'react';

import { ColProps } from 'antd/lib/grid';
import { Button as CusButton } from '@/components/Antd';

export type FormLayout = 'horizontal' | 'vertical' | 'inline';

type FormLabel = { wrapperCol?: ColProps; layout?: FormLayout };

interface FormItemLabel extends FormListProps {
  label: string;
  name: string;
  [name: string]: any;
}

interface FormInputAttr {
  placeholder?: string;
  type: string | undefined;
  options?: { text: string; value: number }[];
}

// config
interface FormItem extends FormItemProps {
  itemLabel: FormItemLabel;
  inputAttr: FormInputAttr;
}

interface Props<T> extends FormProps {
  formLabel: FormLabel;
  formItem: FormItem[];
  initState?: object;
  onFinish: (v: T) => void;
  onValuesChange?: (v1: string, v2: object) => void;
  formRef?: (instance: unknown) => void;
  resetForm: (v?: T) => void;
  fixed?: boolean;
}

type ComponentProps<T = object> = React.FC<Props<T>>;

export const Form: ComponentProps = (props) => {
  const { formLabel, formItem, initState, onFinish, onValuesChange, formRef, resetForm } = props;
  const [form] = AntdForm.useForm();
  // 设置表单
  useImperativeHandle(formRef, () => ({
    setFormValue: (params) => {
      form.setFieldsValue(params);
    },
    resetFields: (params) => {
      form.resetFields();
    }
  }));

  const getInputEle = (attr: FormInputAttr) => {
    let eleType = <Input {...attr} className="reset-input" allowClear autoComplete="off" />;
    if (attr.type === 'date') {
      eleType = <DatePicker className="reset-input" allowClear style={{ width: '100%' }} />;
    } else if (attr.type === 'rangeDate') {
      eleType = <DatePicker.RangePicker className="reset-input" allowClear style={{ width: '100%' }} />;
    } else if (attr.type === 'select') {
      eleType = (
        <Select allowClear placeholder={attr.placeholder}>
          {attr.options?.map((val) => (
            <Select.Option key={val.value} value={val.value}>
              {val.text}
            </Select.Option>
          ))}
        </Select>
      );
    }
    return eleType;
  };

  const resetHandle = () => {
    form.resetFields();
    resetForm && resetForm(form.getFieldsValue());
  };

  const fixedStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '0',
    background: '#292932',
    padding: '20px 30px 20px',
    borderRadius: '10px',
    margin: '0',
    right: '17px',
    left: 0
  };

  return (
    <React.Fragment>
      <AntdForm name="basic" onFinish={onFinish} onValuesChange={onValuesChange} form={form} initialValues={initState} {...formLabel}>
        {formItem.map((item) => {
          return (
            <AntdForm.Item {...item.itemLabel} key={item.itemLabel?.name}>
              {getInputEle(item.inputAttr)}
            </AntdForm.Item>
          );
        })}
        <AntdForm.Item style={props.fixed ? fixedStyle : {}}>
          <div className="submit-btn">
            <CusButton onClick={resetHandle} className="reset">
              重置
            </CusButton>
            <CusButton type="primary" htmlType="submit">
              搜索
            </CusButton>
          </div>
        </AntdForm.Item>
      </AntdForm>

      <style jsx global>{`
        label.ant-form-item-required,
        .ant-form-item-label label {
          font-family: PingFangSC-Semibold;
          font-size: 12px;
          color: #fafafb;
          letter-spacing: 0.8px;
        }
        .ant-form-item {
          margin-bottom: 10px;
        }
        .reset-input {
          background: #44444f;
          color: #cacace !important;
          border: none;
          border-radius: 10px;
          height: 38px;
        }

        .ant-picker-input > input,
        .ant-picker-suffix {
          color: #cacace !important;
        }
        .submit-btn {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px;
        }
        .reset {
          margin-right: 20px;
        }
        .ant-picker-panel-container {
          background: #13131a;
        }
        .ant-picker-header,
        .ant-picker-content th,
        .ant-picker-content td {
          color: #fff;
        }

        .anticon.anticon-swap-right {
          color: #cacace;
        }

        .ant-picker-cell-in-view.ant-picker-cell-in-range::before {
          background: #2c3c44;
        }
        .ant-picker-cell-disabled::before {
          background: #6d6d6d;
        }
        .ant-picker-cell-disabled .ant-picker-cell-inner {
          color: #969696;
        }
        .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover::before {
          background: #2c3c44;
        }

        .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single)::before,
        .ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single)::before {
          background: #2c3c44;
        }
        .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single).ant-picker-cell-range-hover-start::before,
        .ant-picker-cell-in-view.ant-picker-cell-range-selected.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single)::before {
          background: #00f;
        }

        .form-select.ant-select .ant-select-selector {
          background: #44444f;
          color: #cacace !important;
          border: none;
          border-radius: 10px;
          height: 38px;
        }

        .form-select.ant-select:hover .ant-select-selector,
        .form-select.ant-select.ant-select-focused .ant-select-selector {
          border-color: #4f4f5a !important;
        }

        .form-select.ant-select .ant-select-arrow {
          color: #b5b5be;
        }

        .form-select.ant-select .ant-select-selection-item,
        .form-select.ant-select .ant-select-selection-placeholder {
          line-height: 38px;
        }

        .form-select.ant-select .ant-select-clear {
          background: transparent;
          color: #000;
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
    </React.Fragment>
  );
};
