import { Button, Form } from 'antd';
import { FormInstance, FormProps, Rule } from 'antd/lib/form';
import React, { useEffect, useState } from 'react';

export interface BaseFormItemProps {
  /** 数据 key 字段 Field */
  field?: string;
  title?: string;
  rules?: Rule[];
  /** 不显示，隐藏 */
  noRender?: (formInstance: FormInstance) => boolean;
  /** 不显示，隐藏 */
  disabled?: (formInstance: FormInstance) => boolean;
  /** 渲染的组件 */
  wrap: (props: BaseFormItemProps & { formInstance: FormInstance }) => React.ReactElement | null;
  /** 默认值 */
  initialValue?: unknown;
}

interface BaseProps extends FormProps {
  mapSource: BaseFormItemProps[];
}

const FromWrap: React.FC<BaseProps> = (props) => {
  const { mapSource, onFinish, onFieldsChange, onFinishFailed, onValuesChange, onChange } = props;
  const [formInstance] = Form.useForm<{ [filed: string]: number | string | boolean }>();
  const [fockUpdate, setFockUpdate] = useState(Date.now());
  useEffect(() => {
    /** 组件渲染完成后重新渲染一次，让提供的 钩子内部可以访问到初始化的值 */
    setFockUpdate(Date.now());
  }, []);
  Reflect.set(FromWrap, 'fockUpdateDate', fockUpdate);
  if (!mapSource.length) return null;

  const childFormProps: Partial<BaseProps> = { ...props };
  delete childFormProps.mapSource;

  return (
    <div className="app-form-theme">
      <Form
        {...childFormProps}
        form={formInstance}
        /** 提交表单且数据验证成功后回调事件 */
        onFinish={onFinish || function () {}}
        /** 提交表单且数据验证失败后回调事件 */
        onFinishFailed={onFinishFailed || function () {}}
        /** 字段更新时触发回调事件 */
        onFieldsChange={onFieldsChange || function () {}}
        /** 字段值更新时触发回调事件 */
        onValuesChange={(changedValues, values) => {
          setFockUpdate(Date.now());
          onValuesChange && onValuesChange(changedValues, values);
        }}
        onChange={(e) => {
          setFockUpdate(Date.now());
          onChange && onChange(e);
        }}
      >
        {mapSource.map((mapItem) => {
          const childProps: Partial<BaseFormItemProps> = { ...mapItem };
          let _disabled = false;
          const { noRender, disabled } = mapItem;
          if (noRender && typeof noRender === 'function' && noRender(formInstance)) {
            return null;
          }
          if (disabled && typeof disabled === 'function' && disabled(formInstance)) {
            _disabled = true;
          }
          if (!mapItem.wrap({ ...mapItem, formInstance })) return null;
          return (
            <Form.Item label={mapItem.title} key={mapItem.field} rules={mapItem.rules} name={mapItem.field} {...childProps} shouldUpdate>
              {mapItem.wrap({ ...mapItem, formInstance })}
            </Form.Item>
          );
        })}
        <Form.Item label="">
          <Button
            htmlType="button"
            onClick={() => {
              formInstance.resetFields();
            }}
          >
            重置
          </Button>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
      <style jsx global>{`
        .app-form-theme .ant-row {
          flex-direction: column !important;
        }
        .app-form-theme .ant-form-item-label {
          text-align: left !important;
        }
        .app-form-theme .ant-form-item-control {
          flex: auto !important;
        }
        .app-form-theme .ant-form-item-label > label::after {
          content: '';
        }
      `}</style>
    </div>
  );
};

export default FromWrap;
