import { Button, Form } from 'antd';
import { FormInstance, FormItemProps, FormProps } from 'antd/lib/form';
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

import { Button as CusButton } from '@/components/Antd';
import { Rule } from 'rc-field-form/lib/interface';

export interface BaseFormItemProps extends Partial<FormItemProps> {
  /** 表单字段 */
  name: string;
  /** 表单名称 */
  label: string | React.ReactNode;
  /** 表单字段 */
  rules?: Rule[];
  /** 渲染的组件 */
  render: React.ReactNode;
}

interface BaseProps extends FormProps {
  mapSource: BaseFormItemProps[];
  /** 默认值 */
  tailLayout?: object;
  formlayout?: object;
  footer?: (value: FormInstance) => JSX.Element;
  resetForm?: (value: FormInstance) => void;
  ref?: any;
  initialValue?: unknown;
  fixed?: boolean;
  form?: FormInstance;
}

const FromWrap: React.FC<BaseProps> = forwardRef((props, ref) => {
  const {
    mapSource,
    onFinish,
    resetForm,
    onFieldsChange,
    onFinishFailed,
    onValuesChange,
    onChange,
    initialValue,
    tailLayout,
    footer,
    fixed = true,
    form,
    ...otherProps
  } = props;

  const [formInstance] = Form.useForm();
  const fromRef = useRef(null);
  useImperativeHandle(ref, () => fromRef.current);
  useEffect(() => {
    formInstance.setFieldsValue(initialValue);
  }, [initialValue]);

  return (
    <>
      <Form
        className="app-form"
        ref={fromRef}
        form={form ? form : formInstance}
        /** 提交表单且数据验证成功后回调事件 */
        onFinish={onFinish || function () {}}
        /** 提交表单且数据验证失败后回调事件 */
        onFinishFailed={onFinishFailed || function () {}}
        /** 字段更新时触发回调事件 */
        onFieldsChange={onFieldsChange || function () {}}
        /** 字段值更新时触发回调事件 */
        onValuesChange={(changedValues, values) => {
          onValuesChange && onValuesChange(changedValues, values);
        }}
        /** 当前输入框值改变, 获取到当前组件对象 */
        onChange={(e) => {
          onChange && onChange(e);
        }}
        {...otherProps}
      >
        <div className="form-input-list">
          {mapSource.map((mapItem) => {
            const { render, ...props } = mapItem;
            const renderNode = render && typeof render === 'function' ? render() : render;
            return (
              <Form.Item {...props} key={props.name}>
                {renderNode}
              </Form.Item>
            );
          })}
        </div>
        {footer ? (
          footer(formInstance)
        ) : (
          <Form.Item {...tailLayout} className="submit-btn_fixed">
            <CusButton onClick={() => resetForm && resetForm(formInstance)} className="reset">
              重置
            </CusButton>
            <CusButton type="primary" htmlType="submit">
              搜索
            </CusButton>
          </Form.Item>
        )}
      </Form>
      {/* margin-bottom: 80px; */}
      <style jsx global>{`
        .app-form {
          position: relative;
          height: 100%;
        }
        .form-input-list {
          height: calc(100% - 65px);
          overflow-y: auto;
          padding-right: 20px;
        }
        .submit-btn_fixed {
          position: absolute;
          background: #292932;
          border-radius: 10px;
          margin: 0;
          right: 20px;
          left: 0;
          bottom: 0;
          text-align: right;
          line-height: 60px;
        }
      `}</style>
    </>
  );
});

export default FromWrap;
